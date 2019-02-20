import React, { useContext } from 'react';
import { RichText } from 'prismic-reactjs';
import FullFrame from 'components/FullFrame/FullFrame';
import { ContextFrameContext } from 'containers/Context/Context';
import Styled from './blocks';

const DirectoryLinks = ({ caseStudies }) => {
  const handleHover = useContext(ContextFrameContext);
  return (
    <FullFrame context>
      <ul>
        {caseStudies.map(({
          id, uid, data, tags,
        }, i) => (
          <Styled.ListItem
            initialPose="out"
            pose="in"
            i={i}
            key={id}
            onMouseEnter={() => handleHover(tags, i)}
          >
            <Styled.ListLink to={`/${uid}`}>
              {RichText.asText(data.title)}
            </Styled.ListLink>
          </Styled.ListItem>
        ))}
      </ul>
    </FullFrame>
  );
};

export default React.memo(DirectoryLinks);
