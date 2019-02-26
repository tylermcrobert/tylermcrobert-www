import React, { useContext, memo } from 'react';
import { AppContext } from 'containers/App/App';
import Context from 'containers/Context/Context';
import { Switch, Route, withRouter } from 'react-router-dom';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import { ThemeProvider } from 'styled-components/macro';

const Layout = withRouter(({ location }) => {
  const { caseStudies, index } = useContext(AppContext);
  return (
    <ThemeProvider theme={{ color: { light: '#6a6a6a', main: '#f6f6f6' } }}>
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index} >
        <Switch key={location.pathname}>
          <Route exact path="/info" render={() => 'INFO'} />
          <Route path="/:uid" render={({ match }) => <CaseStudy uid={match.params.uid} />} />
          <Route path="/" render={() => <CaseStudyIndex />} />
        </Switch>
      </Context>
    </>
    </ThemeProvider>
  );
});

export default memo(Layout);
