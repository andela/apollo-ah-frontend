import { clapArticleType } from '../actions/clapsAction';
import initialState from '../store/initialState';

/**
 * Claps reducer function
 *
 * @param {object} [state=initialState] - The initial state to load
 * @param {Function} action - The action to dispatch
 * @returns {object} - Returns the mutated state object
 */
export default (state = initialState.article, action) => {
  switch (action.type) {
    case clapArticleType.success:
      return {
        ...state,
        claps: action.payload.claps
      };
    case clapArticleType.failure:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
