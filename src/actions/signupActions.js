import axios from 'axios';
import typeGenerator from './typeGenerator';

export const signupType = typeGenerator('SIGNUP');

/**
 * This function returs an action with its type
 * @param {String} type - auto genrated action type 
 * @param {Object} data - data to be pased to store
 */
const signupAction = (type, data) => ({ type, data });

/**
 * This action signs up a user and populates the store
 * @param {Object} userData - This is the user data to be sent to the API
*/
export const signUpUser = (userData) => async(dispatch) => {
  dispatch(signupAction(signupType.loading, true));
  try {
    const response = await axios.post(`${process.env.API_BASE_URL}/users`, userData);
    const { data: { data } } = response;
    dispatch(signupAction(signupType.success, { loading: false, success: true, token: data.token }));

  } catch (err) {
    let errors;
    errors = [{message: "A network error occurred", field: "network"}];
    if (err.response) {
      errors = err.response.data.data;
    }
    dispatch(signupAction(signupType.error, { errors: errors, loading: false } ));
  }
};

/**
 * This function clears all errors from the store
*/
export const clearErrors = () => (dispatch) => {
  dispatch(signupAction(signupType.clear_errors, null));
};


/**
 * This function adds an error to the store
 * @param {Object} data - data to be passed to the action
*/
export const addError = (data) => (dispatch) => {
  dispatch(signupAction(signupType.add_error, { errors: data }));
};
