/* eslint-disable import/extensions */
/* eslint-disable import/no-named-as-default */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/wrap-multilines */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ConnectedHomePage from '../components/HomePage';
import SignupPage from '../views/SignupPage';
import ConnectedLogin from '../components/Login';
import ProtectedRoutes from './ProtectedRoutes';
import Footer from '../views/Footer';
import Navbar from '../components/NavbarContainer';
import Article from '../components/Article';
import NotFound from '../components/NotFound';



/**
 * @function Routes - A JSX wrapper for all the app's routes
 * @returns {BrowserRouter} - The combination of all the routes in the app
 * @exports Routes
 */
function Routes() {
  return (
    <BrowserRouter>
      <>
        <Navbar />
        <Switch>
          <Route path="/" component={ConnectedHomePage} exact />
          <Route path="/login" component={ConnectedLogin} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/user" component={ProtectedRoutes} />
          <Route path="/" component={ConnectedHomePage} exact />
          <Route path="/article/:slug" component={Article} exact />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Routes;
