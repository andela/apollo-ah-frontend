import { toastr } from 'react-redux-toastr';
import { splitName } from './helpers';
import { MESSAGE } from './constants';

/**
 * Perform a login with facebook authentication
 *
 * @export
 * @param {object} response response from facebook
 * @param {Function} handleLogin Function to make login request
 * @param {Function} handleError Function to handle error response
 * @returns {void}
 */
export default function loginFacebook(response, handleLogin, handleError) {
  if (!response.id) {
    const errorMessage = MESSAGE.FACEBOOK_FAILURE;
    toastr.error(errorMessage);
    return handleError(errorMessage);
  }
  
  const [firstname, lastname] = splitName(response.name);
  const userPayload = {
    firstname,
    lastname,
    email: response.email,
    socialType: 'facebook',
    socialId: response.userID,
    avatarUrl: response.picture.data.url,
  };
  return handleLogin(userPayload);
}
