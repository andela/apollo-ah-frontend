/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.jsx';
import Login from '../views/Login.jsx';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
