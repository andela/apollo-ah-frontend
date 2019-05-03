import axios from 'axios';
import actionTypeGenerator from './typeGenerator';

export const getArticlesType = actionTypeGenerator('GET_ARTICLES');

/**
 * Action generator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */
export const getArticlesLoading = () => ({
  type: getArticlesType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @returns {object} The action to dispatch
 */
export const getArticlesSuccess = (articles, page) => ({
  type: getArticlesType.success,
  articles,
  page,
});

/**
 * Action generator that is dispatched when operation fails
 * @returns {object} The action to dispatch
 */
export const getArticlesFailure = error => ({
  type: getArticlesType.failure,
  error,
});

/**
 * @description Request to the API to get only 12 latest published articles
 * @returns {object} dispatch object
 */

let response;
export const getArticles = (page, size) => async (dispatch) => {
  dispatch(getArticlesLoading());
  try {
    if (!page || !size) {
      response = await axios.get(`${process.env.API_BASE_URL}/articles?page=1&size=12`);
    } else {
      response = await axios.get(`${process.env.API_BASE_URL}/articles?page=${page}&size=${size}`);
    }
    const { data: { data } } = response;
    dispatch(getArticlesSuccess(data.articles, data.page));
  } catch (error) {
    dispatch(getArticlesFailure(error));
  }
};


// import request from '../utils/request';
// import typeGenerator, { action } from './typeGenerator';

// export const getArticlesType = typeGenerator('GET_ARTICLES');


// /**
//  * @description Request to the API to get only 12 latest published articles
//  * @returns {object} dispatch object
//  */

// export const getArticles = () => async (dispatch) => {
//   dispatch(action(getArticlesType.loading, true));
//   return request({ route: 'articles?size=12', }).then((response) => {
//     const { data: { data: { articles } } } = response;
//     dispatch(action(getArticlesType.success, articles));
//   }).catch((error) => {
//     const message = error.response
//       ? ''
//       : 'Please check your network connection';
//     dispatch(action(getArticlesType.failure, message));
//   });
// };
