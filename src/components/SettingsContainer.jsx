/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import Settings from '../views/Settings';
import ProfileHeaderContainer from './ProfileHeaderContainer';

/**
 * Container component for the Settings view
 * @export
 * @class SettingsContainer
 * @extends {Component}
 */
export default class SettingsContainer extends Component {
  render() {
    return (
      <>
        <ProfileHeaderContainer activePage="SETTINGS" />
        <Settings />
      </>
    );
  }
}
