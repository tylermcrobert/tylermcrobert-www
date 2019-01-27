import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import Styled from './blocks';

const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ContextFrame>
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
          <Styled.ListLink to={`/${uid}`}>{RichText.asText(data.title)}</Styled.ListLink>
        </Styled.ListItem>
      ))}
      </ul>
    </ContextFrame>

  );
  return <Links />;
};

DirectoryLinks.propTypes = {
};

export default React.memo(DirectoryLinks);
