import axios from 'axios';
import typeGenerator from './actionTypeGenerator';

/**
 * @description - Action Generator for signup
 * @param {string} actionType - type of action
 * @param {object} payload - action data 
 * @returns {object}
 */
export const signupAction = (type, payload) => ({
  type: typeGenerator(type),
  payload
});



export const signUpUser = (userData) => async(dispatch) => {
  dispatch(signupAction('LOADING', true));
  try {
    const response = await axios.post(`${process.env.API_BASE_URL}/users`, userData);
    const { data: { data } } = response;
    dispatch(signupAction('LOADING', false));
   
  } catch (err) {
    const errors = err.response.data.data;
    dispatch(signupAction('SIGNUP_ERROR', { errors: errors, loading: false } ));
  }
};
