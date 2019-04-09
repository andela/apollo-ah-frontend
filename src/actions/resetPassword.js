/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
import axios from 'axios';
import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
} from './actionTypes';


const apiUrl = process.env.API_BASE_URL;

/**
 * reset password action creator
 *
 * @export
 * @param string email - user's email address
 * @returns {object}
 */

const passwordResetRequest = email => {
  return async (dispatch) => {
    dispatch({
      type: PASSWORD_RESET_REQUEST,
      isLoading: true
    });
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/users/forgot_password`, { email });
      dispatch({
        type: PASSWORD_RESET_REQUEST_SUCCESS,
        isLoading: false
      });
      return data;
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_REQUEST_FAILURE,
        isLoading: false
      });
      return error.response.data;
    }
  };
};

export default passwordResetRequest;
