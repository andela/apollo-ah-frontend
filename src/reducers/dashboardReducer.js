import { dashboardActionTypes } from '../actions/dashboardAction';

/**
 * A reducer that formats the data before updating the redux store with the new state
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
const dashboardReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case dashboardActionTypes.success:
      return {
        ...state, articles: data, loading: false
      };
    case dashboardActionTypes.failure:
      return {
        ...state, articles: data === '' ? [] : state.articles, loading: false
      };
    case dashboardActionTypes.loading:
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default dashboardReducer;
