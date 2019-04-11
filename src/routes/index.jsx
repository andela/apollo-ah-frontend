/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Signup from '../views/Signup';
import Login from '../views/Login';
import CreateArticles from '../components/CreateArticles';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/create_articles" component={CreateArticles} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
