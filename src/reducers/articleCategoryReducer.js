import typeGenerator from '../actions/actionTypeGenerator';

const initialState = {
  category: [],
  loading: '',
};

/**
 * @description - articles categories reducer function
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
    case typeGenerator('GET_ARTICLES_CATEGORY_SUCCESS'):
      return {
        ...state,
        category: action.payload
      };
    case typeGenerator('GET_ARTICLES_CATEGORY_FAILURE'):
      return {
        ...state,
        loading: action.payload,
        categories: 'Categories not found'
      };
    default:
      return state;
  }
};
