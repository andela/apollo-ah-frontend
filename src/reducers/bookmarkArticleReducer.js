import initialState from '../store/initialState';
import { bookmarkArticleType } from '../actions/bookmarkActions';

/**
 *
 * @param {*} state - The initial bookmarkedList state
 * @param {*} action - The action payload
 * @returns {Object} - The current bookmarkedList state
 */
const bookmarkReducer = (state = initialState.bookmarkedList, action) => {
  const { type, data, message } = action;
  switch (type) {
    case bookmarkArticleType.success:
      if (message === 'successfully unbookmarked this article') {
        const filteredList = state.bookmarked.filter(post => post.articleId !== data.articleId);
        return {
          bookmarked: [...filteredList],
          isLoading: false,
          message
        };
      }
      return {
        bookmarked: [...state.bookmarked, data],
        isLoading: false,
        message
      };
    case bookmarkArticleType.loading:
      return {
        bookmarked: [...state.bookmarked],
        isLoading: true,
        message: ''
      };
    case bookmarkArticleType.failure:
      return {
        bookmarked: [...state.bookmarked],
        isLoading: false,
        message
      };
    default:
      return state;
  }
};

export default bookmarkReducer;
