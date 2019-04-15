/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import NotFound from '../views/NotFound';
import Nav from '../views/Navbar';
import Footer from '../views/Footer';

/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */
function Routes() {
  return (
    <BrowserRouter>
      <div>
        <Nav
          categories="Categories"
          authors="Authors"
          bookmark="Bookmarks"
          search="Search"
          write="Write an article"
          login="Login"
        />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} exact />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default Routes;
