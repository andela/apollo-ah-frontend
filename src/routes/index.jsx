import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from '../views/NotFound';
import ConnectedHomePage from '../components/HomePage';
import ProtectedRoutes from './ProtectedRoutes';
import Footer from '../views/Footer';
import Navbar from '../components/NavbarContainer';
import ConnectedLogin from '../components/Login';
import Article from '../components/Article';

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
          <Route path="/user" component={ProtectedRoutes} />
          <Route path="/article/:slug" component={Article} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default Routes;
