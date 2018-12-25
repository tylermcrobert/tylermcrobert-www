import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ul>
      {caseStudies.map(({
        id, uid, data, tags,
      }, i) => (
        <li key={id} onMouseEnter={() => handleHover(tags, i)}>
          <Link to={`/${uid}`}>{RichText.asText(data.title)}</Link>
        </li>
      ))}
    </ul>
  );
  return <Links />;
};

DirectoryLinks.propTypes = {
};

export default DirectoryLinks;
