import {
  PASSWORD_RESET_REQUEST,
  PASSWORD_RESET_REQUEST_FAILURE,
  PASSWORD_RESET_REQUEST_SUCCESS,
} from './actionTypes';

const apiUrl = 'https://apollo-ah-backend-staging.herokuapp.com';

const passwordResetRequest = payload => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/users/forgot_password`, { ...payload });
      dispatch({
        type: PASSWORD_RESET_REQUEST,
        email: payload,
      });
      return data;
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_REQUEST,
        email: null,
      });
      return error.response.data;
    }
  };
};

export default passwordResetRequest;