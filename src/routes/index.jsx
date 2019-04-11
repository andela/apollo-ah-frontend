/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainHomePage from '../components/HomePage';

function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={MainHomePage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Routes;
