import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileHeader from '../views/common/ProfileHeader';
import { updateUserProfile, setIsLoading } from '../../actions/profileAction';
import { UPDATING_PROFILE_IMAGE } from '../../actions/actionTypes';
import CloudinaryWidget from '../common/CloudinaryWidget';

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
    const { showLoader } = this.props;
    showLoader(true);
    if (widget === undefined) {
      widget = new CloudinaryWidget(this.updateProfileImage, showLoader, true);
    }
    widget.open();
  }

  render() {
    const { activePage, profile, isLoading } = this.props;
    return (
      <ProfileHeader
      activePage={activePage}
      profile={profile}
      isLoading={isLoading}
      handleImageUpload={this.handleImageUpload}
      />
    );
  }
}
ProfileHeaderContainer.propTypes = {
  showLoader: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
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
  isLoading: state.loading.updatingProfileImage,
});
const mapDispatchToProps = dispatch => ({
  updateProfile: userData => dispatch(updateUserProfile(UPDATING_PROFILE_IMAGE, userData)),
  showLoader: (status = false) => dispatch(setIsLoading(UPDATING_PROFILE_IMAGE, status))
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeaderContainer);
