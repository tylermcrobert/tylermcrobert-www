import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Preview from '../prismic/Preview';
import Layout from './Layout/Layout';
import NotFound from '../components/NotFound/NotFound';

const App = props => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <Layout {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
