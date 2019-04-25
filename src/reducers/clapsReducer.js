import { userClapsType } from '../actions/clapsAction';

const initialState = {
  claps: 0,
};

/**
 * Claps reducer function
 *
 * @param {object} [state=initialState] - The initial state to load
 * @param {object} action - The action to dispatch
 * @returns {object} - Returns the mutated state object
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case userClapsType.success:
      return { claps: action.payload.claps };
    default:
      return state;
  }
};
