import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import { globalAuthenticated, globalError } from './globalActions';
import { MESSAGE } from '../utils/constants';

/**
 * Social login action handler
 *
 * @export
 * @param {object} payload - The user payload object
 * @returns {object} - Returns an actions object
 */
const socialLogin = payload => async dispatch => {
  try {
    const apiUrl = `${process.env.API_BASE_URL}/auth/social`;
    const response = await axios.post(apiUrl, { ...payload });
    if (!response.data.user) {
      return dispatch(globalError(response.data.errors));
    }

    const { user } = response.data;
    localStorage.setItem('user', JSON.stringify(user));
    toastr.success(MESSAGE.SOCIAL_LOGIN_SUCCESS);
    return dispatch(globalAuthenticated(true));
  } catch (error) {
    toastr.error(MESSAGE.SOCIAL_LOGIN_FAILURE);
    return dispatch(globalError(error));
  }
};

export default socialLogin;
