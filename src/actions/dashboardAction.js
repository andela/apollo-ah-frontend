import request from '../utils/request';
import typeGenerator from './typeGenerator';


export const dashboardActionTypes = typeGenerator('FETCH_ARTICELS_BY_AUTHOR');

/**
 * Action creator to get articles written by the current user
 * @param {string} type The dispatch type
 * @param {object} data The data to dispatch
 * @returns {object} The generated action object
 */
export const dashboardAction = (type, data) => ({ type, data });

/**
 * The action to dispatch to fetch articles from the backend
 * @param {object} userId The userId of the current user
 * @returns {object} The promise object
 */
export const getDashboardArticles = userId => async (dispatch) => {
  dispatch(dashboardAction(dashboardActionTypes.loading));
  return request({
    route: `articles?authorId=${userId}`,
  }).then((response) => {
    const { data: { data: { articles } } } = response;
    dispatch(dashboardAction(dashboardActionTypes.success, articles));
  }).catch((error) => {
    const message = error.response
      ? ''
      : 'Please check your network connection';
    dispatch(dashboardAction(dashboardActionTypes.failure, message));
  });
};
