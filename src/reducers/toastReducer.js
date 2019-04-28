import { NEW_TOAST, CLEAR_TOAST } from '../actions/actionTypes';

/**
 * Reducer that handles toast action
 *
 * @param {object} [state=null] - The initial state to load
 * @param {object} action - The action to dispatch
 * @param {string} action.type - The action type
 * @param {string} action.payload - The action payload
 * @returns {string|object} - Returns the mutated state object
 */
export default (state = null, { type, payload }) => {
  switch (type) {
    case NEW_TOAST:
      return payload;
    case CLEAR_TOAST:
      return '';
    default:
      return state;
  }
};
