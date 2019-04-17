/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Dashboard from '../views/Dashboard';
import ProfileHeaderContainer from './ProfileHeaderContainer';

/**
 * Container component for the Dashboard view
 * @export
 * @class DashboardContainer
 * @extends {Component}
 */
export default class DashboardContainer extends Component {
  render() {
    return (
      <>
        <ProfileHeaderContainer activePage="DASHBOARD" />
        <Dashboard />
      </>
    );
  }
}
