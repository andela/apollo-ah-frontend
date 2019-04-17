import { createArticleType } from '../actions/createArticles';


const initialState = {
  loading: false,
  message: '',
};

/**
 * create an article reducer
 *
 * @export
 * @param {object} state - initial state
 * @param {object} action - to update state
 * @returns {object}
 */

export default function createArticleReducer(state = initialState, action = {}) {
  const { type, message } = action;
  switch (type) {
    case createArticleType.loading:
      return { ...state, loading: true, message };
    case createArticleType.success:
    case createArticleType.failure:
      return { ...state, loading: false, message };
    default:
      return state;
  }
}