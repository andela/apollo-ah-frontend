/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import Navbar from '../views/Navbar';
import * as selectors from '../selectors/navbarSelector';
import { logoutUser } from '../actions/logoutAction';

/**
 * Container component for the Navbar view
 * @export
 * @class NavbarContainer
 * @extends {Component}
 */
export class NavbarContainer extends Component {
  state = {
    showSearch: false,
  }

  revealSearchBar = (e) => {
    const { showSearch } = this.state;
    e.preventDefault();
    this.setState({ showSearch: !showSearch });
  }

  onLogoutClick = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }

  render() {
    const { isLoggedIn, profile } = this.props;
    const { showSearch } = this.state;
    return (
      <>
        {!isLoggedIn && <Redirect to="/login" />}
        <Navbar
          isLoggedIn={isLoggedIn}
          profile={profile}
          revealSearchBar={this.revealSearchBar}
          showSearch={showSearch}
          logout={this.onLogoutClick}
        />
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector(
  {
    isLoggedIn: selectors.getIsLoggedIn,
    profile: selectors.getProfile,
  }
);

NavbarContainer.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  profile: PropTypes.object.isRequired,
  logoutUser: PropTypes.func,
};
NavbarContainer.defaultPropType = {
  logoutUser: () => {},
};

export default connect(mapStateToProps, { logoutUser })(NavbarContainer);
