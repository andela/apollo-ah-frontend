import { authenticationType } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  error: [],
};

/**
 * Social login reducer
 *
 * @export
 * @param {object} [state=initialState] - The global state object
 * @param {object} action - The action object
 * @returns {object} The mutated state object
 */
export default function socialReducer(state = initialState, action) {
  if (action.type === authenticationType.success) {
    return {
      ...state,
      isAuthenticated: action.payload.isAuthenticated,
    };
  }
  if (action.type === authenticationType.failure) {
    return {
      ...state,
      error: [action.payload.error],
    };
  }
  return state;
}
