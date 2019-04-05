/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Dashboard from '../views/Dashboard';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import Wrapper from '../views/reuse/Wrapper';

/**
 * Container component for the Dashboard view
 * @export
 * @class DashboardContainer
 * @extends {Component}
 */
export default class DashboardContainer extends Component {
  /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof DashboardContainer
     */
  render() {
    return (
      <Wrapper>
        <ProfileHeaderContainer activePage="DASHBOARD" />
        <Dashboard />
      </Wrapper>
    );
  }
}
