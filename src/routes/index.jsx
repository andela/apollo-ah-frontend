import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import Signup from '../components/views/Signup';
import Login from '../components/views/Login';
import ProtectedRoutes from './protectedRoutes';

function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/user" component={ProtectedRoutes} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Routes;
