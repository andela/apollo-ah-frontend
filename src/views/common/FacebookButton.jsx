import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import PropTypes from 'prop-types';
import facebook from '../../images/icons/facebook.svg';
import ImageButton from './ImageButton';

/**
 * A function representing FacebookButton
 *
 * @param {{Function}} handleResponse - A response handler callback
 * @returns {JSX.Element} - DOM element
 */
const FacebookButton = ({ handleResponse }) => (
  <FacebookLogin
    appId={process.env.FACEBOOK_APP_ID}
    autoLoad={false}
    fields="name,email,picture"
    callback={handleResponse}
    render={renderProps => (
      <ImageButton
        imgSrc={facebook}
        onClick={renderProps.onClick}
        altText="login with facebook"
      />
    )}
  />
);

FacebookButton.propTypes = {
  handleResponse: PropTypes.func.isRequired,
};

export default FacebookButton;
