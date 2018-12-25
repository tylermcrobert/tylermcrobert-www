import React from 'react';
import PropTypes from 'prop-types';
import Directory from 'containers/Directory/Directory';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import Nav from 'components/Nav/Nav';

const Layout = ({ caseStudies, view }) => (
  <div>
    <Nav />
    {view === 'home' && <Directory caseStudies={caseStudies} />}
    {view === 'caseStudy' && <CaseStudy />}
  </div>
);

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
