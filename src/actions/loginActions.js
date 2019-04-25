import axios from 'axios';
import typeGenerator from './typeGenerator';
import decodeToken from '../utils/decodeToken';


export const loginType = typeGenerator('LOG_IN_USER');

const loading = status => ({ type: loginType.loading, data: status });
const loginProcess = (type, data) => ({ type, data });

/**
 * @function userLogin - This is an action generator which dispatches an action
 * @param {*} payload - The dispatch payload. receives user email and password
 * @param {*} dispatch - the redux store dispatch function
*/
const userLogin = payload => async (dispatch) => {
  try {
    dispatch(loading(true));
    const result = await axios.post(`${process.env.API_BASE_URL}/users/login`, { ...payload });
    const { token } = await result.data;
    const profile = decodeToken(token);
    /** store token in a session */
    sessionStorage.setItem('token', token);
    /** dispatch token as payload for redux persistence */
    return dispatch(loginProcess(loginType.success, { token, profile }));
  } catch (error) {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    return dispatch(loginProcess(loginType.failure, errorMessage));
  }
};

export default userLogin;
