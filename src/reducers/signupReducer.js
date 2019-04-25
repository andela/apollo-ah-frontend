import { signupType } from '../actions/signupActions';
import initialState from '../store/initialState';


/**
 * @description - signup reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case signupType.loading:
      return { loading: action.data };
    case signupType.failure:
      return { errors: action.data.errors, loading: action.data.loading };
    case signupType.success:
      return {
        success: action.data.success,
        loading: action.data.loading,
        token: action.data.token,
      };
    default:
      return state;
  }
};
