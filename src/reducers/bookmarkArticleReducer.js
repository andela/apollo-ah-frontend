import initialState from '../store/initialState';
import { bookmarkArticleType } from '../actions/bookmarkActions';

/**
 *
 * @param {*} state - The initial bookmarkedList state
 * @param {*} action - The action payload
 * @returns {Object} - The current bookmarkedList state
 */
const bookmarkReducer = (state = initialState.bookmarkedList, action) => {
  const { type, data } = action;
  switch (type) {
    case bookmarkArticleType.success:
      // if (typeof data === 'string') {
      //   return state.
      // }
      return {
        bookmarked: [...state.bookmarked, data],
        isLoading: false,
      };
    case bookmarkArticleType.loading:
      return {
        bookmarked: [...state.bookmarked],
        isLoading: true,
      };
    case bookmarkArticleType.failure:
      return {
        bookmarked: [...state.bookmarked],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
