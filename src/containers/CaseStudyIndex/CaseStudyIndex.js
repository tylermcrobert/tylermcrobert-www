import React, { useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import { withRouter } from 'react-router-dom';
import FullFrame from 'components/FullFrame/FullFrame';
import { ContextFrameContext } from 'containers/Context/Context';
import Styled, { ZoomIn } from './blocks';

const DirectoryLinks = ({ caseStudies, location }) => {
  const handleHover = useContext(ContextFrameContext);

  return (
    <FullFrame context>
      <ZoomIn>
        <ul>
          {caseStudies.map(({
          id, uid, data, tags,
        }, i) => (
          <Styled.ListItem
            i={i}
            key={id}
            onMouseEnter={() => handleHover(tags, i)}
          >
            <Styled.ListLink to={{ pathname: `/${uid}`, search: location.search }}>
              {RichText.asText(data.title)}
            </Styled.ListLink>
          </Styled.ListItem>
        ))}
        </ul>
      </ZoomIn>
    </FullFrame>
  );
};

export default withRouter(React.memo(DirectoryLinks));
