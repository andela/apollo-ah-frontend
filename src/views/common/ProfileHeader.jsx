import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

/**
 * For a logged in user, this component is displayed under the main navigation bar.
 * Shown on the DASHBOARD, SETTINGS and EDIT PROFILE pages.
 * @export
 * @param {object} props The props object containing values that would be used
 * within this component
 * @returns {array} The resulting JSX object
 */
const ProfileHeader = ({
  profile,
  activePage,
  handleImageUpload,
  isLoading
}) => {
  const {
    firstname,
    lastname,
    username,
    image,
  } = profile;

  return (
    <>
      <header className="page-header">
        <h1>{`My ${activePage}`}</h1>
      </header>
      <div className="profile-box mt-n4">
        <div className={`d-inline-block relative profile-img-cover${isLoading ? ' overlay' : ''}`}>
          <span className="spinner-border text-light align-middle" />
          <img src={image} className="img-thumbnail" alt={username} />
          {
                activePage === 'PROFILE' && (
                <button type="button" className="btn change-image transition" onClick={handleImageUpload}>
                  <i className="fas fa-camera" />
                </button>
                )}
        </div>
        <div className="profile-wrapper">
          <h4 className="profile-name text-capitalize">
            {firstname}
            {' '}
            {lastname}
          </h4>
          <p className="profile-username">{`@${username}`}</p>
        </div>
        <div className="profile-footer">
          <Link to="dashboard" className={`btn ${activePage === 'DASHBOARD' && 'active'}`}><span className="relative">Dashboard</span></Link>
          <Link to="profile" className={`btn ${activePage === 'PROFILE' && 'active'}`}><span className="relative">Edit profile</span></Link>
        </div>
      </div>
    </>
  );
};

ProfileHeader.propTypes = {
  /** Controls the state of the indicator and upload image icon */
  isLoading: PropTypes.bool.isRequired,
  /** Used to hightlight the current page */
  activePage: PropTypes.oneOf(['DASHBOARD', 'SETTINGS', 'PROFILE']).isRequired,
  /** Gets called when the user clicks on the upload image button */
  handleImageUpload: PropTypes.func.isRequired,
  /** The user profile object */
  profile: PropTypes.shape({
    /** The firstname of the user */
    firstname: PropTypes.string,
    /** The last name of the user */
    lastname: PropTypes.string,
    /** The unique username of the user */
    username: PropTypes.string,
    /** A short bio of the user */
    image: PropTypes.string,
  }).isRequired,
};

export default ProfileHeader;
