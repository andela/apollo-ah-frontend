import axios from 'axios';
import typeGenerator from './typeGenerator';

const API_URL = process.env.API_BASE_URL;

export const getArticleType = typeGenerator('GET_ARTICLE');

const loading = (type, status) => ({ type, status });
const getArticleProcess = (type, data, message) => ({ type, data, message });

/**
 * @function getArticle - This is an action generator which dispatches the getArticle action
 * @param {*} payload - The dispatch payload. receives article slug
 * @param {*} dispatch - the redux store dispatch function
 * @returns
 */
const getArticle = payload => async (dispatch) => {
  try {
    dispatch(loading(getArticleType.loading, true));
    const result = await axios.get(`${API_URL}/articles/${payload}`);
    const { data: article, message } = await result.data;
    return dispatch(getArticleProcess(getArticleType.success, article, message));
  } catch (error) {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    return dispatch(getArticleProcess(getArticleType.failure, {}, errorMessage));
  }
};

export default getArticle;
