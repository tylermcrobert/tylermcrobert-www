import React from 'react';
import PropTypes from 'prop-types';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
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
        ? <CaseStudyIndex handleHover={handleHover} caseStudies={caseStudies} />
        : <CaseStudy data={caseStudies[index]} />) }
      </Context>
    </>
  </ThemeProvider>
);

Layout.defaultProps = {
  index: 1,
};

Layout.propTypes = {
  caseStudies: PropTypes.arrayOf(PropTypes.object).isRequired,
  view: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default Layout;
