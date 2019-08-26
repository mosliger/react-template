import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NoMatch from './pages/404';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NoMatch} />
    </Switch>
  );
};
