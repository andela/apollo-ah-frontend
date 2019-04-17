import React from 'react';
import { PropTypes } from 'prop-types';

/**
 * Displays the user profile details. Users can also update their profile here.
 * @export
 * @param {object} props The props object containing values that would be used
 * within this component.
 * @returns {array} The resulting JSX object
 */
const EditProfile = ({
  profile,
  handleUpdateProfile,
  isLoading,
  errorData,
  token
}) => {
  const {
    firstname,
    lastname,
    username,
    bio,
    image,
  } = profile;

  return (
    <>
      <div className="card mb-5 mt-4">
        <form className={`form p-sm-4 p-3 ${errorData.length !== 0 ? 'error' : ''}`} onSubmit={handleUpdateProfile} noValidate>
          <div className="form-group mb-4">
            <label htmlFor="fname" className="font-weight-bold">First Name</label>
            <input type="text" className="form-control text-capitalize" id="fname" defaultValue={firstname} name="firstname" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="lname" className="font-weight-bold">Last Name</label>
            <input type="text" className="form-control text-capitalize" id="lname" defaultValue={lastname} name="lastname" />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="fname" className="font-weight-bold">Username</label>
            <input type="text" className="form-control" id="username" defaultValue={username} name="username" required />
            <span className="text-danger">Username is required.</span>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="bio" className="font-weight-bold">Bio</label>
            <textarea className="form-control" id="bio" name="bio" defaultValue={bio} />
          </div>
          <button type="submit" className="btn btn-brand btn-plain" disabled={isLoading}>
              Update profile
            {' '}
            {isLoading && <span className="spinner-border text-light spinner-border-sm" />
                }
          </button>
          <input type="hidden" defaultValue={token} name="token" className="hidden" />
          <input type="hidden" defaultValue={image} name="image" className="hidden" />
        </form>
      </div>
    </>
  );
};

EditProfile.propTypes = {
  /** Use to show validator indicators on the form elements */
  errorData: PropTypes.array,
  /** The authentication token */
  token: PropTypes.string.isRequired,
  /** Called when the update profile button is clicked */
  handleUpdateProfile: PropTypes.func.isRequired,
  /** Used to disable the update profile button while processing a request */
  isLoading: PropTypes.bool,
  /** The user profile object */
  profile: PropTypes.shape({
  /** The firstname of the user */
    firstname: PropTypes.string,
    /** The last name of the user */
    lastname: PropTypes.string,
    /** The unique username of the user */
    username: PropTypes.string,
    /** A short bio of the user */
    bio: PropTypes.string,
    /** The user profile image */
    image: PropTypes.string.isRequired,
  }).isRequired,
};

EditProfile.defaultProps = {
  isLoading: false,
  errorData: [],
};

export default EditProfile;
