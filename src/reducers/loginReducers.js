import initialState from '../store/initialState';
import { loginType } from '../actions/loginActions';
import { authenticationType } from '../actions/actionTypes';

/**
 * 
 * @param {*} state - The initial user state
 * @param {*} action - The action payload
 * @returns {Object} - The current user state 
 */
const LoginReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case loginType.success:
      return {
        ...state,
        token: action.data,
        isLoggedIn: true,
        loginStatus: true,
        message: 'Your login was successful',
        isLoading: false,
      };
    case loginType.loading:
      return {
        ...state,
        isLoading: action.status,
      };
    case loginType.failure:
      return {
        ...state,
        token: undefined,
        message: action.data,
        isLoading: false,
        isLoggedIn: false,
        loginStatus: false,
      };
    case authenticationType.success:
      return {
        ...state,
        ...action.payload,
      };
    case authenticationType.failure:
      return {
        ...state,
        error: [action.payload.error],
      };
    default:
      return state;
  }
};

export default LoginReducer;
