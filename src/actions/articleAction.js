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

export const getArticles = () => async (dispatch) => {
  try {
    dispatch(articleAction('LOADING', 'started'));
    const response = await axios.get(`${process.env.API_BASE_URL}/articles?size=12`);
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
