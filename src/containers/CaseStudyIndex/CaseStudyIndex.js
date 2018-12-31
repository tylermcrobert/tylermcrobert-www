import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import { ListItem, ListLink } from './style';

const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ContextFrame>
      <ul>
        {caseStudies.map(({
        id, uid, data, tags,
      }, i) => (
        <ListItem
          initialPose="out"
          pose="in"
          i={i}
          key={id}
          onMouseEnter={() => handleHover(tags, i)}
        >
          <ListLink to={`/${uid}`}>{RichText.asText(data.title)}</ListLink>
        </ListItem>
      ))}
      </ul>
    </ContextFrame>

  );
  return <Links />;
};

DirectoryLinks.propTypes = {
};

export default React.memo(DirectoryLinks);
