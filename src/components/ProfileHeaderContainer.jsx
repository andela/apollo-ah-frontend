import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import * as selectors from '../selectors/profileSelector';
import ProfileHeader from '../views/common/ProfileHeader';
import CloudinaryWidget from './common/CloudinaryWidget';
import { updateUserProfile, updatingProfile } from '../actions/profileAction';

let widget;

/**
 * Container component for the ProfileHeader view
 * @export
 * @class ProfileHeaderContainer
 * @extends {Component}
 */
class ProfileHeaderContainer extends Component {
  /**
   * Update the profile image on the server
   * @param {string} image The image url returned by cloudinary
   * @memberof ProfileHeaderContainer
   */
   updateProfileImage = async (image) => {
     const { profile, updateProfile, token } = this.props;
     const payload = { ...profile, token, image };
     await updateProfile(payload);
     const { errorData } = this.props;
     if (errorData.length !== 0) {
       toast.error(errorData[0]);
     }
   }

   /**
   * Opens the cloudinary image widget
   * @memberof ProfileHeaderContainer
   */
   handleImageUpload = () => {
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
  activePage: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  updateProfile: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
  errorData: PropTypes.array,
  showLoader: PropTypes.func.isRequired,
};

ProfileHeaderContainer.defaultProps = {
  isLoading: false,
  errorData: []
};

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.getUpdatingProfile,
    token: selectors.getToken,
    profile: selectors.getProfile,
    errorData: selectors.getErrorData
  }
);
const mapDispatchToProps = dispatch => ({
  updateProfile: payload => dispatch(updateUserProfile(payload)),
  showLoader: (status = false) => dispatch(updatingProfile(status))
});
export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeaderContainer);
