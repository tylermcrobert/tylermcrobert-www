import React, { useContext, memo } from 'react';
import { AppContext } from 'containers/App/App';
import Context from 'containers/Context/Context';
import { Switch, Route, withRouter } from 'react-router-dom';
import CaseStudy from 'containers/CaseStudy/CaseStudy';
import posed, { PoseGroup } from 'react-pose';
import CaseStudyIndex from 'containers/CaseStudyIndex/CaseStudyIndex';
import Nav from 'containers/Nav/Nav';
import Info from 'containers/Info/Info';
import FullFrame from 'components/FullFrame/FullFrame';

const RouteContainer = posed.div({
  enter: {
    opacity: 1, beforeChildren: true, delay: 400, transition: { duration: 0 },
  },
  exit: { opacity: 1, transition: { duration: 0 } },
});

const Layout = withRouter(({ location }) => {
  const {
    caseStudies,
    index,
    context,
    notFound,
  } = useContext(AppContext);
  const preEnterPose = location.pathname === '/' ? 'preEnter' : 'exit';


  if (!notFound) {
    return (
    <>
      <Nav />
      <Context caseStudies={caseStudies} index={index} enabled={context}>
        <PoseGroup preEnterPose={preEnterPose} animateOnMount>
          <RouteContainer key={location.pathname}>
            <Switch location={location}>
              <Route exact path="/info" render={() => <Info />} key="info" />
              {caseStudies.map(cs => cs.uid).map(uid => (
                <Route
                  path={`/${uid}`}
                  render={() => <CaseStudy uid={uid} />}
                  key="casestudy"
                />))}
              <Route path="/" render={() => <CaseStudyIndex />} key="index" />
            </Switch>
          </RouteContainer>
        </PoseGroup>
      </Context>
    </>
    );
  }
  return <><Nav /><FullFrame><div>Not Found</div></FullFrame></>;
});

export default memo(Layout);
