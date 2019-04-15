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


/**
 * This action signs up a user and populates the store
 * @param {Object} userData - This is the user data to be sent to the API
*/
export const signUpUser = (userData) => async(dispatch) => {
  dispatch(signupAction('SIGNUP_LOADING', true));
  try {
    const response = await axios.post(`${process.env.API_BASE_URL}/users`, userData);
    const { data: { data } } = response;
    dispatch(signupAction('SIGNUP_SUCCESS', { loading: false, success: true, token: data.token }));

  } catch (err) {
    const errors = err.response.data.data;
    console.log(errors);
    dispatch(signupAction('SIGNUP_ERROR', { errors: errors, loading: false } ));
  }
};

/**
 * This function clears all errors from the store
*/
export const clearErrors = () => (dispatch) => {
  dispatch(signupAction('CLEAR_ERRORS', null));
};


/**
 * This function adds an error to the store
 * @param {Object} data - data to be passed to the action
*/
export const addError = (data) => (dispatch) => {
  dispatch(signupAction('ADD_ERROR', { errors: data }));
};
