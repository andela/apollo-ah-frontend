import initialState from '../store/initialState';
import { getArticleType } from '../actions/singleArticleActions';

/**
 *
 *
 * @param {*} [state=initialState.article] - The initial article state
 * @param {*} action - The action being dispatched
 * @returns {Object} - The current article state
 */
const getArticleReducer = (state = initialState.article, action) => {
  switch (action.type) {
    case getArticleType.success:
      return {
        ...state,
        ...action.data,
        message: action.message,
        isLoading: false,
      };
    case getArticleType.loading:
      return {
        ...state,
        isLoading: action.status,
      };
    case getArticleType.failure:
      return {
        ...state,
        message: action.message,
        isLoading: false,
        User: {},
        id: '',
        slug: '',
        title: '',
        body: '',
        image: '',
        description: '',
        readTime: '',
        createdAt: '',
        updatedAt: '',
        deletedAt: '',
        authorId: '',
        categoryId: '',
        tagList: [],
        articleCategory: {},
        ratings: [],
      };
    default:
      return state;
  }
};

export default getArticleReducer;
