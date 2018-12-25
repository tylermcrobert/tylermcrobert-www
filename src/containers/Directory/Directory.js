import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

const Directory = ({ caseStudies }) => (
  <ul>
    {caseStudies.map((cs) => {
      const { id, uid, data } = cs;
      return (
        <li key={id}>
          <Link to={`/${uid}`}>
            {RichText.asText(data.title)}
          </Link>
        </li>
    );
  })}
  </ul>
);

export default Directory;
