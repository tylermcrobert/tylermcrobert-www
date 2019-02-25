import React, { useContext, useEffect } from 'react';
import { RichText } from 'prismic-reactjs';
import { AppContext } from 'containers/App/App';


import includes from 'array-includes';
import { withRouter } from 'react-router-dom';
import FullFrame from 'components/FullFrame/FullFrame';
import { ContextFrameContext } from 'containers/Context/Context';
import Styled, { ZoomIn } from './blocks';

function useScrollRest() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 300);
  }, []);
}

const DirectoryLinks = () => {
  const { caseStudies } = useContext(AppContext);
  useScrollRest();
  return (
    <FullFrame context>
      <ZoomIn>
        <ul>
          <ListItems {...{ caseStudies }} />
        </ul>
      </ZoomIn>
    </FullFrame>
  );
};

const ListItems = withRouter(({ caseStudies, location }) => {
  const { handleHover, hoveredTag } = useContext(ContextFrameContext);
  return (
    caseStudies.map(({
      id,
      uid,
      data,
      tags,
    }, i) => (
      <Styled.ListItem
        i={i}
        key={id}
        onMouseEnter={() => handleHover(tags, i)}
        active={includes(tags, hoveredTag)}
      >
        <Styled.ListLink to={{ pathname: `/${uid}`, search: location.search }} >
          {RichText.asText(data.title)}
        </Styled.ListLink>
      </Styled.ListItem>
    ))
  );
});

export default React.memo(DirectoryLinks);
