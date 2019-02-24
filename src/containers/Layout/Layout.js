import React, { useContext, memo } from 'react';
import { AppContext } from 'containers/App/App';
import Context from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import posed, { PoseGroup } from 'react-pose';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import { ThemeProvider } from 'styled-components/macro';

const Layout = () => {
  const { view, caseStudies, index } = useContext(AppContext);
  return (
    <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index} >
        <PoseGroup animateOnMount preEnterPose={view === 'home' ? 'preEnter' : 'exit'}>
          <RouteContainer key={view}>
            { view === 'home'
            ? <CaseStudyIndex caseStudies={caseStudies} />
            : <CaseStudy data={caseStudies[index]} /> }
          </RouteContainer>
        </PoseGroup>
      </Context>
    </>
    </ThemeProvider>
  );
};

const RouteContainer = posed.div({
  enter: {
    opacity: 1, delay: 400, beforeChildren: true, transition: { duration: 0 },
  },
  exit: { opacity: 0 },
});

export default memo(Layout);
