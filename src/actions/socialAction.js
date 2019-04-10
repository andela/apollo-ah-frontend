import axios from 'axios';
import { toast } from 'react-toastify';
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
    toast.success(MESSAGE.SOCIAL_LOGIN_SUCCESS);
    return dispatch(globalAuthenticated(true));
  } catch (error) {
    const { response } = error;
    toast.error(MESSAGE.SOCIAL_LOGIN_FAILURE);
    return dispatch(globalError(response.data.data));
  }
};

export default socialLogin;
