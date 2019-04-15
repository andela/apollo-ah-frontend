/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage.jsx';
import SignupPage from '../views/SignupPage.jsx';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signup" component={SignupPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
