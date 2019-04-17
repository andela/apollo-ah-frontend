import initialState from '../store/initialState';
import { loginType } from '../actions/loginActions';

/**
 *
 * @param {*} state - The initial user state
 * @param {*} action - The action payload
 * @returns {Object} - The current user state
 */
const LoginReducer = (state = initialState.user, action) => {
  const { type, data } = action;
  switch (type) {
    case loginType.success:
      return {
        ...state,
        token: data.token,
        isLoggedIn: true,
        loginStatus: true,
        message: 'Your login was successful',
        isLoading: false,
        profile: data.profile,
      };
    case loginType.loading:
      return {
        ...state,
        isLoading: data,
      };
    case loginType.failure:
      return {
        ...state,
        token: undefined,
        message: data,
        isLoading: false,
        isLoggedIn: false,
        loginStatus: false,
      };
    default:
      return state;
  }
};

export default LoginReducer;
