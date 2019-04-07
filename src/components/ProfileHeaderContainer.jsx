/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileHeader from '../views/reuse/ProfileHeader';
import { updateUserProfile } from '../actions/profileAction';
import { UPDATING_PROFILE_IMAGE } from '../actions/actionTypes';
import CloudinaryWidget from './common/CloudinaryWidget';

let widget;

/**
 * Container component for the ProfileHeader view
 * @export
 * @class ProfileHeaderContainer
 * @extends {Component}
 */
class ProfileHeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.updateProfileImage = this.updateProfileImage.bind(this);
  }

  /**
   * Update the profile image on the server
   * @param {string} imageUrl The image url returned by cloudinary
   * @memberof ProfileHeaderContainer
   */
  updateProfileImage(imageUrl) {
    const { profile, updateProfile } = this.props;
    profile.image = imageUrl;
    updateProfile(profile);
  }

  /**
   * Opens the cloudinary image widget
   * @memberof ProfileHeaderContainer
   */
  handleImageUpload() {
    widget.open();
  }

  render() {
    const { activePage, profile } = this.props;
    widget = new CloudinaryWidget(this.updateProfileImage, true);
    return (
      <ProfileHeader
      activePage={activePage}
      profile={profile}
      handleImageUpload={this.handleImageUpload}
      />
    );
  }
}
ProfileHeaderContainer.propTypes = {
  activePage: PropTypes.string.isRequired,
  updateProfile: PropTypes.func.isRequired,
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
const mapDispatchToProps = dispatch => ({
  updateProfile: userData => dispatch(updateUserProfile(UPDATING_PROFILE_IMAGE, userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeaderContainer);
