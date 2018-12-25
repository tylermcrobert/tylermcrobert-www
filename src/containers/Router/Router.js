import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import App from 'containers/App/App';
import 'styles/reset.css';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/info" render={() => <App view="info" />} />
      <Route exact path="/:uid" render={() => <App view="caseStudy" />} />
      <Route path="/" render={() => <App view="home" />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
