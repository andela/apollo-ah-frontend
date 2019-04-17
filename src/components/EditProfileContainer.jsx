import React, { Component } from 'react';
import formDataJSON from 'formdata-json';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { createStructuredSelector } from 'reselect';
import { PropTypes } from 'prop-types';
import * as selectors from '../selectors/profileSelector';
import EditProfile from '../views/EditProfile';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import { updateUserProfile } from '../actions/profileAction';

/**
 * Container component for the EditProfile view
 * @export
 * @class EditProfileContainer
 * @extends {Component}
 */
class EditProfileContainer extends Component {
  /**
   * Updates the user profile
   * @param {object} event The event object
   * @memberof EditProfileContainer
   */
  handleUpdateProfile = async (event) => {
    event.preventDefault();
    const payload = new FormData(event.target);
    const { updateProfile } = this.props;

    await updateProfile(formDataJSON(payload));
    const { errorData } = this.props;
    if (errorData.length === 0) {
      toast.success('Your profile has been updated successfully.');
    } else {
      toast.error(errorData[0], {
        hideProgressBar: true,
      });
    }
  }

  render() {
    const {
      isLoading,
      token,
      profile,
      errorData
    } = this.props;

    return (
      <>
        <ProfileHeaderContainer activePage="PROFILE" />
        <EditProfile
          handleUpdateProfile={this.handleUpdateProfile}
          isLoading={isLoading}
          profile={profile}
          errorData={errorData}
          token={token}
        />
      </>
    );
  }
}

/** Proptype validation */
EditProfileContainer.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  errorData: PropTypes.array,
  token: PropTypes.string.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector(
  {
    isLoading: selectors.getUpdatingProfile,
    errorData: selectors.getErrorData,
    token: selectors.getToken,
    profile: selectors.getProfile,
  }
);

EditProfileContainer.defaultProps = {
  isLoading: false,
  errorData: []
};

const mapDispatchToProps = dispatch => ({
  updateProfile: payload => dispatch(updateUserProfile(payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
