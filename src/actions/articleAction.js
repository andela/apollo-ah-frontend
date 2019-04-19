import axios from 'axios';
import typeGenerator from './actionTypeGenerator';

/**
 * @description - articles response function
 * @param {string} actionType - type of action
 * @param {object} articles - articles returned
 * @returns {object}
 */

export const articleAction = (type, payload) => ({
  type: typeGenerator(type),
  payload
});

/**
 * @description Request to the API to get only 12 latest published articles
 * @returns {object} dispatch object
 */

let response;
export const getArticles = (page, size) => async (dispatch) => {
  try {
    dispatch(articleAction('LOADING', 'started'));
    if (page === undefined || size === undefined) {
      response = await axios.get(`${process.env.API_BASE_URL}/articles?page=1&size=12`);
    } else {
      response = await axios.get(`${process.env.API_BASE_URL}/articles?page=${page}&size=${size}`);
    }
    const { data: { data } } = response;
    if (response.status === 404) {
      dispatch(articleAction('GET_ARTICLES_FAILURE', 'Article not found'));
      dispatch(articleAction('STOP_LOADING', 'stopped'));
    }
    dispatch(articleAction('GET_ARTICLES_SUCCESS', data));
    dispatch(articleAction('STOP_LOADING', 'stopped'));
  } catch (err) {
    dispatch(articleAction('STOP_LOADING', 'stopped'));
    dispatch(articleAction('SEVER_ERROR', err));
  }
};
