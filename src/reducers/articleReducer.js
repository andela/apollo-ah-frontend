import { getArticlesType } from '../actions/articleAction';

const initialState = {
  articles: [],
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
  const {
    type,
    articles,
    page,
    error,
  } = action;
  switch (type) {
    case getArticlesType.loading:
      return {
        ...state,
        loading: true,
      };
    case getArticlesType.success:
      return {
        ...state,
        articles,
        page,
      };
    case getArticlesType.failure:
      return {
        ...state,
        loading: false,
        articles: '',
        error,
      };
    default:
      return state;
  }
};
