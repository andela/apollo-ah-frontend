import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import ProtectedRoutes from './protectedRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/user" component={ProtectedRoutes} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Routes;
