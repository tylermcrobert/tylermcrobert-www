import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Preview from './utils/Preview';
import Home from './views/Home';
import NotFound from './views/NotFound';

const App = props => (
  <Router>
    <Switch>
      <Route exact path="/" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
