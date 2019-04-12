/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage';
import ProtectedRoutes from './protectedRoutes';
import Footer from '../views/Footer';
import Navbar from '../components/NavbarContainer';

function Routes() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/user" component={ProtectedRoutes} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Routes;
