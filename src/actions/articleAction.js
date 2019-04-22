import axios from 'axios';
import request from '../utils/request';
import typeGenerator from './actionTypeGenerator';
import { getArticleType } from './actionTypes';

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

/**
 * Triggers get article loading state
 *
 * @returns {object} Returns an action object
 */
export const getArticleLoading = () => ({
  type: getArticleType.loading,
});

/**
 * Triggers get article success state
 *
 * @param {object} payload - The article resource
 * @returns {object} Returns an action object
 */
export const getArticleSuccess = payload => ({
  type: getArticleType.success,
  payload,
});

/**
 * Triggers get article failure
 *
 * @param {object} payload - The Error object
 * @returns {object} Returns an action object
 */
export const getArticleFailure = payload => ({
  type: getArticleType.failure,
  payload,
});

/**
 * Action handler for fetching a single article resource
 *
 * @export
 * @param {string} slug - The article slug
 * @returns {object} Returns an action
 */
export const fetchArticle = slug => async (dispatch) => {
  try {
    const response = await axios.get(`${process.env.API_BASE_URL}/articles/${slug}`);
    const { data: { data: article } } = response;
    return dispatch(getArticleSuccess(article));
  } catch (error) {
    return dispatch(getArticleFailure(error));
  }
};

/**
 * Action handler for clapping article
 *
 * @export
 * @param {object} payload - The request payload
 * @param {string} payload.slug - The article slug
 * @param {number} payload.claps - The article claps to add
 * @returns {object} Returns an actions object
 */
export const clapArticleRequest = ({ slug, claps }) => async (dispatch) => {
  try {
    const response = await request({
      route: `articles/${slug}/claps`,
      method: 'POST',
      payload: { claps },
    });
    const { data: { data: article } } = response;
    return dispatch(getArticleSuccess(article));
  } catch (error) {
    return dispatch(getArticleFailure(error));
  }
};
