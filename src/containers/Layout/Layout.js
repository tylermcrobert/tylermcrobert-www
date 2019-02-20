import React, { useContext, memo } from 'react';
import { AppContext } from 'containers/App/App';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import { ThemeProvider } from 'styled-components/macro';

const Layout = () => {
  const { view, caseStudies, index } = useContext(AppContext);
  return (
    <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index}>
        { view === 'home'
          ? <CaseStudyIndex caseStudies={caseStudies} />
          : <CaseStudy data={caseStudies[index]} /> }
      </Context>
    </>
    </ThemeProvider>
  );
};


export default memo(Layout);
