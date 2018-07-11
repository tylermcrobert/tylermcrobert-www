import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from 'react-router-dom';

import Preview from '../Preview/Preview';
import App from '../../App/App';

const PreviewRouter = props => (
  <Router>
    <Switch>
      <Route
        exact
        path="/preview"
        render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />}
      />
      <Route
        path="/"
        render={routeProps => (<App {...routeProps} prismicCtx={props.prismicCtx} />)}
      />
    </Switch>
  </Router>
);

export default PreviewRouter;
