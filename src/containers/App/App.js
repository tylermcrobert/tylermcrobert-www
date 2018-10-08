import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import qs from 'qs';

import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import CaseStudyIndex from '../../components/CaseStudyIndex/CaseStudyIndex';
import CaseStudy from '../CaseStudy/CaseStudy';
import Nav from '../Nav/Nav';
import Info from '../../components/Info/Info';

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
    this.setContext();
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  setContext = () => {
    const context = qs.parse(this.props.location.search)['?'];
    if (context) {
      this.setState({ context });
    }
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID(
        'context',
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
          this.setState({ context: 'homepage' });
          this.fetchPage(props);
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
                <Nav location={location} />
                <TransitionGroup className="main transitionGroup">
                  <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                  >
                    <Switch location={location}>
                      <Route
                        exact
                        path="/info"
                        render={routeProps => (
                          <Info
                            {...routeProps}
                            bio={doc.data.bio}
                          />
                        )}
                      />
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
                        path="/"
                        render={routeProps => (
                          <CaseStudyIndex
                            {...routeProps}
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
