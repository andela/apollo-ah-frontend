import React, {Component} from 'react';
import { connect } from 'react-redux';

import EditProfile from '../views/EditProfile';
import ProfileHeaderContainer from './ProfileHeaderContainer';
import Wrapper from '../views/reuse/Wrapper';
import {updateUserProfile} from '../actions/updateProfileAction';


/**
 * Container component for the EditProfile view
 * @export
 * @class EditProfileContainer
 * @extends {Component}
 */
  class EditProfileContainer extends Component{
     /**
     *Creates an instance of EditProfileContainer.
     * @param {object} props The props object
     * @memberof EditProfileContainer
     */
    constructor(props){
        super(props);
        this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
    }

    handleUpdateProfile(event){
      event.preventDefault();
      const data = new FormData(event.target);
      const {updateProfile} = this.props;
      updateProfile(data);
    }
    
     /**
     * The render method
     * @returns {array} The resulting JSX object
     * @memberof EditProfileContainer
     */
    render(){
      const {isLoading, profile, errorData} = this.props;
        return (
          <Wrapper>
            <ProfileHeaderContainer activePage="PROFILE" />
            <EditProfile 
            handleUpdateProfile={this.handleUpdateProfile} 
            isLoading={isLoading} 
            profile={profile}
            errorData={errorData}
            />
          </Wrapper>
        );
    }
}

const mapStateToProps = state => ({
  isLoading: state.loading,
  profile: state.user,
  errorData: state.user.error,
});

const mapDispatchToProps = dispatch => ({
  updateProfile: userData => dispatch(updateUserProfile(userData)),
});
export default connect(mapStateToProps, mapDispatchToProps)(EditProfileContainer);
