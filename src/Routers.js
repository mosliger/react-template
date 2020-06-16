import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Page2 from './pages/Page2';
import NoMatch from './pages/404';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/page-2" component={Page2} />
      <Route component={NoMatch} />
    </Switch>
  );
};
