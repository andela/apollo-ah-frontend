/* eslint-disable react/require-extension */
import axios from 'axios';
import typeGenerator from './typeGenerator';
import { API_URL } from '../utils/constants';

export const loginType = typeGenerator('LOG_IN_USER');

const loading = (type, status) => ({ type, status });
const loginProcess = (type, data) => ({ type, data });

/**
 * @function userLogin - This is an action generator which dispatches an action
 * @param {*} payload - The dispatch payload. receives user email and password
 * @param {*} dispatch - the redux store dispatch function
*/
const userLogin = payload => async dispatch => {

  try {
    dispatch(loading(loginType.loading, true));
    const result = await axios.post(`${API_URL}/users/login`, { ...payload });
    const { token } = await result.data;
    return dispatch(loginProcess(loginType.success, token));
  } catch (error) {
    const { message } = error.response.data;
    return dispatch(loginProcess(loginType.failure, message));
  }
};

export default userLogin;