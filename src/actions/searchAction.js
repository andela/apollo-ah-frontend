import request from '../utils/request';
import typeGenerator, { action } from './typeGenerator';


export const searchTypes = typeGenerator('SEARCH_ARTICLES');

/**
 * The action to dispatch to search articles from the backend
 * @param {object} query The search query
 * @returns {object} The promise object
 */
export const search = query => async (dispatch) => {
  dispatch(action(searchTypes.loading));
  return request({
    route: 'articles',
    params: { ...query }
  }).then((response) => {
    const { data: { data } } = response;
    dispatch(action(searchTypes.success, Array.isArray(data) ? {} : data));
  }).catch(() => {
    dispatch(action(searchTypes.failure, 'Something went wrong. Please check your network connection.'));
  });
};
