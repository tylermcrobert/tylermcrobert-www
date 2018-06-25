import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';
import Intro from '../../components/Intro/Intro';
import Loading from '../../components/Loading/Loading';
import NotFound from '../../components/NotFound/NotFound';
import CaseStudyIndex from '../../components/CaseStudyIndex/CaseStudyIndex';
import CaseStudy from '../CaseStudy/CaseStudy';
import Nav from '../../components/Nav/Nav';


import '../../styles/reset.css';
import '../../styles/typography.css';


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
            // 'case_study.description'
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
    if (this.state.doc) {
      return (
        <Router>
          <React.Fragment>
            <Nav />
            <Switch>
              <Route
                exact
                path="/:caseStudyUID"
                render={routeProps => (
                  <CaseStudy
                    {...routeProps}
                    prismicCtx={this.props.prismicCtx}
                    doc={this.state.doc}
                  />
                )}
              />
              <Route
                exact
                Path="/"
                render={() => (
                  <React.Fragment>
                    <Intro doc={this.state.doc} />
                    <CaseStudyIndex
                      doc={this.state.doc}
                      prismicCtx={this.props.prismicCtx}
                    />
                  </React.Fragment>
                )}
              />
            </Switch>
          </React.Fragment>
        </Router>
      );
    } else if (this.state.notFound) {
      return <NotFound />;
    }
    return <Loading />;
  }
}
