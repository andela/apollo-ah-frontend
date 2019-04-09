import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Wrapper from '../components/views/common/Wrapper';
import isLoggedIn from '../utils/authenticate';
import EditProfileContainer from '../components/containers/EditProfileContainer';
import SettingsContainer from '../components/containers/SettingsContainer';
import DashboardContainer from '../components/containers/DashboardContainer';

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
