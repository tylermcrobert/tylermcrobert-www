import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// import Intro from '../../components/Intro/Intro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import CaseStudyIndex from '../../components/CaseStudyIndex/CaseStudyIndex';
import CaseStudy from '../CaseStudy/CaseStudy';
import Nav from '../../components/Nav/Nav';


import '../../styles/reset.css';
import '../../styles/typography.css';
import '../../styles/main.css';
import '../../styles/animations.css';


export default class App extends React.Component {
  state = {
    context: 'homepage',
    doc: null,
    notFound: false,
  };

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    // this.parseURL();
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getSingle(
        this.state.context,
        {
          fetchLinks: [
            'case_study.title',
            'case_study.description',
            'case_study.deliverables',
          ],
        },
      ).then((doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    const { doc, notFound } = this.state;
    if (doc) {
      return (
        <Router>
          <Route
            render={({ location }) => (
              <React.Fragment>
                <Nav />
                <TransitionGroup className="main transitionGroup">
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/:caseStudyUID"
                        render={routeProps => (
                          <CaseStudy
                            {...routeProps}
                            prismicCtx={this.props.prismicCtx}
                            caseStudiesList={doc.data.case_study_list}
                          />
                        )}
                      />
                      <Route
                        exact
                        Path="/"
                        render={() => (
                          <CaseStudyIndex
                            caseStudiesList={doc.data.case_study_list}
                            prismicCtx={this.props.prismicCtx}
                          />
                        )}
                      />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Fragment>
            )}
          />
        </Router>
      );
    } else if (notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
