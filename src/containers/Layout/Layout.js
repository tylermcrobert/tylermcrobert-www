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
  enter: { opacity: 1, beforeChildren: true, delay: 300 },
  exit: { opacity: 0 },
});

const Layout = withRouter(({ location }) => {
  const { caseStudies, index } = useContext(AppContext);
  return (
    <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index} >
        <PoseGroup>
          <RouteContainer key={location.key}>
            <Switch>
              <Route exact path="/info" render={() => <Info />} />
              <Route path="/:uid" render={({ match }) => <CaseStudy uid={match.params.uid} />} />
              <Route path="/" render={() => <CaseStudyIndex />} />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </Context>
    </>
    </ThemeProvider>
  );
});


export default memo(Layout);
