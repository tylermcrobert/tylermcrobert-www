import React, { useContext, memo } from 'react';
import { AppContext } from 'containers/App/App';
import Context from 'containers/Context/Context';
import { Switch, Route, withRouter } from 'react-router-dom';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import posed, { PoseGroup } from 'react-pose';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import { ThemeProvider } from 'styled-components/macro';
import Info from 'containers/Info/Info';

const RouteContainer = posed.div({
  enter: {
    opacity: 1, beforeChildren: true, delay: 500, transition: { duration: 0 },
  },
  exit: { opacity: 1, transition: { duration: 0 } },
});

const Layout = withRouter(({ location }) => {
  const { caseStudies, index, context } = useContext(AppContext);
  const preEnterPose = location.pathname === '/' ? 'preEnter' : 'exit';

  return (
    <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index} enabled={context}>
        <PoseGroup preEnterPose={preEnterPose} animateOnMount>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/info" render={() => <Info />} key="info" />
              <Route
                path="/:uid"
                render={({ match }) =>
                  <CaseStudy uid={match.params.uid} />}
                key="casestudy"
              />
              <Route path="/" render={() => <CaseStudyIndex />} key="index" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </Context>
    </>
    </ThemeProvider>
  );
});

export default memo(Layout);
