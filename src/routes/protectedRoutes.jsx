import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Wrapper from '../views/reuse/Wrapper';
import isLoggedIn from '../utils/authenticate';
import EditProfileContainer from '../components/EditProfileContainer';
import SettingsContainer from '../components/SettingsContainer';
import DashboardContainer from '../components/DashboardContainer';

/**
 * Container component for protected pages
 * @export
 * @class ProtectedContainer
 * @extends {Component}
 */
const ProtectedContainer = () => {
  if (!isLoggedIn()) {
    return (<Redirect to="/login" />);
  }
  return (
    <Wrapper>
      <Switch>
        <Route path="/user/profile" component={EditProfileContainer} />
        <Route path="/user/dashboard" component={DashboardContainer} />
        <Route path="/user/settings" component={SettingsContainer} />
      </Switch>
    </Wrapper>
  );
};

export default ProtectedContainer;
