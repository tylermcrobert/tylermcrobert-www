import React, { useContext, memo } from 'react';
import { Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';

import { AppContext } from 'containers/App/App';
import Context, { ContextRoute } from 'containers/Context/Context';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import Info from 'containers/Info/Info';

const RouteContainer = posed.div({
  enter: {
    opacity: 1, beforeChildren: true, delay: 400, transition: { duration: 0 },
  },
  exit: { opacity: 1, transition: { duration: 0 } },
});


const Layout = withRouter(({ location }) => {
  const { caseStudies, index } = useContext(AppContext);
  const preEnterPose = location.pathname === '/' ? 'preEnter' : 'exit';

  return (
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index}>
        <PoseGroup preEnterPose={preEnterPose} animateOnMount>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <ContextRoute exact path="/info" render={() => <Info />} key="info" />
              {caseStudies.map(cs => cs.uid).map(uid => (
                <ContextRoute
                  path={`/${uid}`}
                  render={() => <CaseStudy uid={uid} />}
                  key="casestudy"
                  context
                />))}
              <ContextRoute path="/" render={() => <CaseStudyIndex />} key="index" context />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </Context>
    </>
  );
});

export default memo(Layout);
