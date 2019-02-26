import React from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import App from 'containers/App/App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/@:ctx"
        render={({ match }) => <Redirect to={`/?=${match.params.ctx}`} />}
      />
      <Route exact path="/*" render={() => <App context />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
