import initialStore from '../store/initialState';
import {
  TRIGGER_AUTHENTICATED,
  TRIGGER_ERROR,
} from '../actions/actionTypes';

const { global } = initialStore;

/**
 * Glabal related state handler
 *
 * @export
 * @param {object} [state=global] - The global state object
 * @param {object} action - The global action object
 * @returns {object} The global state object
 */
export default function globalReducer(state = global, action) {
  if (action.type === TRIGGER_AUTHENTICATED) {
    return {
      ...state,
      isAuthenticated: action.isAuthenticated,
    };
  }
  if (action.type === TRIGGER_ERROR) {
    return {
      ...state,
      error: [action.error],
    };
  }
  return state;
}
