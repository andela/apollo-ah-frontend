import { searchTypes } from '../actions/searchAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
const searchReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case searchTypes.success:
      return {
        ...state, articles: data.articles, page: data.page, loading: false, message: null
      };
    case searchTypes.failure:
      return {
        ...state, loading: false, message: data
      };
    case searchTypes.loading:
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default searchReducer;
