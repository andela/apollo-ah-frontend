/* eslint-disable react/wrap-multilines */
/* eslint-disable react/require-extension */
import axios from 'axios';
import {
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
} from './actionTypes';

const apiUrl = 'https://apollo-ah-backend-staging.herokuapp.com';

const passwordResetRequest = email => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/users/forgot_password`, { email });
      dispatch({
        type: PASSWORD_RESET_REQUEST_SUCCESS,
      });
      return data;
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_REQUEST_FAILURE,
      });
      return error.response.data;
    }
  };
};

export default passwordResetRequest;
