import { reportArticleType } from '../actions/reportArticleAction';
import initialState from '../store/initialState';

/**
 * @description - report article reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
const reportArticleReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case reportArticleType.loading:
      return { loading: action.data.loading };
    case reportArticleType.success:
      return { loading: action.data.loading, success: action.data.success };
    case reportArticleType.failure:
      return { loading: action.data.loading, error: action.data.error };
    case reportArticleType.clearErrors:
      return { error: action.data.error };
    default:
      return state;
  }
};

export default reportArticleReducer;
