import React from 'react';
import PropTypes from 'prop-types';
import GoogleLogin from 'react-google-login';
import google from '../../images/icons/google.svg';
import ImageButton from './ImageButton';

/**
 * A function representing GoogleButton
 *
 * @param {{Function}} handleResponse - A response handler callback
 * @returns {JSX.Element} - DOM element
 */
const GoogleButton = ({ handleResponse }) => {
  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      autoLoad={false}
      render={renderProps => (
        <ImageButton
          imgSrc={google}
          onClick={renderProps.onClick}
          altText="login with google"
        />
      )}
      onSuccess={handleResponse}
      onFailure={handleResponse}
    />
  );
};

GoogleButton.propTypes = {
  handleResponse: PropTypes.func.isRequired,
};

export default GoogleButton;
