import { toastr } from 'react-redux-toastr';
import { splitName } from './helpers';
import { MESSAGE } from './constants';

/**
 * Perform a login with google authentication
 *
 * @export
 * @param {object} response response from google
 * @param {Function} handleLogin Function to make login request
 * @param {Function} handleError Function to handle error response
 * @returns {void}
 */
export default function loginGoogle(response, handleLogin, handleError) {
  if (!response.profileObj) {
    const errorMessage = MESSAGE.GOOGLE_FAILURE;
    if (response.error !== 'idpiframe_initialization_failed') {
      toastr.error(errorMessage);
    }
    return handleError(errorMessage);
  }

  const { profileObj } = response;
  const [firstname, lastname] = splitName(profileObj.name);
  const userPayload = {
    firstname,
    lastname,
    email: profileObj.email,
    socialType: 'google',
    socialId: profileObj.googleId,
    avatarUrl: profileObj.imageUrl,
  };
  return handleLogin(userPayload);
}
