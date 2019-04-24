import { createArticleType } from '../actions/createArticles';
import { resetArticleMessage } from '../actions/clearMessage';

const initialState = {
  loading: false,
  message: false,
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
  const {
    type, message
  } = action;
  switch (type) {
    case createArticleType.loading:
      return { ...state, loading: true };
    case createArticleType.success:
    case createArticleType.failure:
      return {
        ...state, loading: false, message,
      };
    case resetArticleMessage:
      return {
        ...state, loading: false, message: '',
      };
    default:
      return state;
  }
}
