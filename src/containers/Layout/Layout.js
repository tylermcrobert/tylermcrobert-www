import React from 'react';
import PropTypes from 'prop-types';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyNav from 'containers/CaseStudyNav/CaseStudyNav';
import Nav from 'containers/Nav/Nav';
import 'styles/reset.css';
import 'styles/layout.css';

const Layout = ({ caseStudies, view, index }) => (
  <>
    <Nav />
    <Context caseStudies={caseStudies} index={index}>
      {({ handleHover }) => (view === 'home'
        ? <CaseStudyNav handleHover={handleHover} caseStudies={caseStudies} />
        : <CaseStudy data={caseStudies[index]} />) }
    </Context>
  </>
);

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
