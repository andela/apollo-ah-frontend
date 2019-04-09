import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import EditProfile from '../views/EditProfile';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import { updateUserProfile } from '../../actions/profileAction';
import { UPDATING_PROFILE } from '../../actions/actionTypes';

/**
 * Container component for the EditProfile view
 * @export
 * @class EditProfileContainer
 * @extends {Component}
 */
class EditProfileContainer extends Component {
  /**
     *Creates an instance of EditProfileContainer.
     * @param {object} props The props object
     * @memberof EditProfileContainer
     */
  constructor(props) {
    super(props);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  /**
   * Updates the user profile
   * @param {object} event The event object
   * @memberof EditProfileContainer
   */
  handleUpdateProfile(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const { updateProfile } = this.props;
    updateProfile(data);
  }

  render() {
    const { isLoading, profile } = this.props;
    return (
      <>
        <ProfileHeaderContainer activePage="PROFILE" />
        <EditProfile
          handleUpdateProfile={this.handleUpdateProfile}
          isLoading={isLoading}
          profile={profile}
        />
      </>
    );
  }
}

EditProfileContainer.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  profile: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    errorData: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};


const mapStateToProps = state => ({
  isLoading: state.loading.updatingProfile,
  profile: state.user,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: userData => dispatch(updateUserProfile(UPDATING_PROFILE, userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
