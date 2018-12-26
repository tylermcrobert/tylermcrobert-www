import React from 'react';
import PropTypes from 'prop-types';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyNav from 'containers/CaseStudyNav/CaseStudyNav';
import Nav from 'containers/Nav/Nav';
import 'styles/reset.css';
import 'styles/layout.css';
import { ThemeProvider } from 'styled-components';

const Layout = ({ caseStudies, view, index }) => (
  <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index}>
        {({ handleHover }) => (view === 'home'
        ? <CaseStudyNav handleHover={handleHover} caseStudies={caseStudies} />
        : <CaseStudy data={caseStudies[index]} />) }
      </Context>
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
