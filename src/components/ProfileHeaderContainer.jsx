/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileHeader from '../views/reuse/ProfileHeader';

/**
 * Container component for the ProfileHeader view
 * @export
 * @class ProfileHeaderContainer
 * @extends {Component}
 */
class ProfileHeaderContainer extends Component {
  /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof ProfileHeaderContainer
     */
  render() {
    const { activePage, profile } = this.props;
    return (
      <ProfileHeader activePage={activePage} profile={profile} />
    );
  }
}
ProfileHeaderContainer.propTypes = {
  activePage: PropTypes.string.isRequired,
  profile: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  profile: state.user,
});
export default connect(mapStateToProps, null)(ProfileHeaderContainer);
