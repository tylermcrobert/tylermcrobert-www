import React from 'react';
import { RichText } from 'prismic-reactjs';
import ContextFrame from 'components/ContextFrame/ContextFrame';
import { Link } from 'react-router-dom';
import style from './CaseStudyNav.module.css';

const DirectoryLinks = ({ caseStudies, handleHover }) => {
  const Links = () => (
    <ContextFrame>
      <ul>
        {caseStudies.map(({
        id, uid, data, tags,
      }, i) => (
        <li key={id} onMouseEnter={() => handleHover(tags, i)}>
          <Link className={style.listItem} to={`/${uid}`}>{RichText.asText(data.title)}</Link>
        </li>
      ))}
      </ul>
    </ContextFrame>

  );
  return <Links />;
};

DirectoryLinks.propTypes = {
};

export default DirectoryLinks;
