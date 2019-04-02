import { ADD_DATA } from '../contants/action-types';
import initialState from '../store/initial-state';

/**
 * This is a sample reducer function
 *
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
export default function rootReducer(state = initialState, action) {
  if (action.type === ADD_DATA) {
    return Object.assign({}, state, {
      data: state.data.concat(action.payload),
    });
  }
  return state;
}