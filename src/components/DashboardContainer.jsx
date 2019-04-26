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
  handleDeleteArticle(event) {
    const slug = event.target.value;
    console.log(slug);
  }

  render() {
    return (
      <>
        <ProfileHeaderContainer activePage="DASHBOARD" />
        <Dashboard summary={{}} articles={[]} handleDeleteArticle={this.handleDeleteArticle} />
      </>
    );
  }
}
