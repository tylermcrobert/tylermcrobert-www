import React from 'react';
import PropTypes from 'prop-types';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyNav from 'containers/CaseStudyNav/CaseStudyNav';
import Nav from 'components/Nav/Nav';

const Layout = ({ caseStudies, view, index }) => (
  <div>
    <Nav />
    <Context
      caseStudies={caseStudies}
      index={index}
      render={({ handleHover }) => (
        <>
          {view === 'home' && <CaseStudyNav handleHover={handleHover} caseStudies={caseStudies} />}
          {view === 'caseStudy' && <CaseStudy data={caseStudies[index]} />}
        </>
      )}
    />
  </div>
);

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
