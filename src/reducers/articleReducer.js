import typeGenerator from '../actions/actionTypeGenerator';
import { getArticleType } from '../actions/actionTypes';

const initialState = {
  articles: [],
  article: {},
  page: {
    first: 1,
    current: 1,
    last: 1,
    currentCount: 0,
    totalCount: 0,
    description: ''
  },
  loading: '',
  error: ''
};

/**
 * @description - articles reducer function
 * @param {object} [state=initialState] - Initial state to load
 * @param {Function} action - Action to dispatch
 * @returns {object}
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case typeGenerator('LOADING'):
      return {
        ...state,
        loading: action.payload,
      };
    case typeGenerator('STOP_LOADING'):
      return {
        ...state,
        loading: action.payload,
      };
    case typeGenerator('GET_ARTICLES_SUCCESS'):
      return {
        ...state,
        articles: action.payload.articles,
        page: action.payload.page
      };
    case typeGenerator('GET_ARTICLES_FAILURE'):
      return {
        ...state,
        loading: action.payload,
        articles: 'Articles not found'
      };
    case typeGenerator('SERVER_ERROR'):
      return {
        ...state,
        loading: action.payload,
        error: ['INTERNAL SERVER ERROR']
      };
    case getArticleType.success:
      return {
        ...state,
        article: {
          ...state.article,
          ...Object.assign({}, action.payload),
        },
      };
    case getArticleType.failure:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
