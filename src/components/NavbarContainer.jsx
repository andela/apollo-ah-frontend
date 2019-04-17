/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import Navbar from '../views/Navbar';
import * as selectors from '../selectors/navbarSelector';

/**
 * Container component for the Navbar view
 * @export
 * @class NavbarContainer
 * @extends {Component}
 */
class NavbarContainer extends Component {
  render() {
    const { isLoggedIn, profile } = this.props;
    return (
      <>
        <Navbar isLoggedIn={isLoggedIn} profile={profile} />
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
};

export default connect(mapStateToProps, null)(NavbarContainer);
