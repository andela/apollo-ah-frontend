import initialState from '../store/initialState';
import { getArticleType } from '../actions/singleArticleActions';
import { clapArticleType } from '../actions/clapsAction';

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

export default getArticleReducer;
