import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Signup from '../views/Signup';
import Login from '../views/Login';
import EditProfileContainer from '../components/EditProfileContainer';
import SettingsContainer from '../components/SettingsContainer';
import DashboardContainer from '../components/DashboardContainer';

function Routes() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={EditProfileContainer} />
          <Route path="/dashboard" component={DashboardContainer} />
          <Route path="/settings" component={SettingsContainer} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default Routes;
