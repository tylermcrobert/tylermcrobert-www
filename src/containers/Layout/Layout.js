import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';

const Layout = ({ caseStudies }) => {
  const Links = () => (
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

  return (
    <div>
      Tyler McRobert
      <Links />
    </div>
  );
};

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
