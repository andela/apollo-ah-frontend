// import axios from 'axios';
import request from '../utils/request';
import actionTypeGenerator from './typeGenerator';

export const createArticleType = actionTypeGenerator('CREATE_ARTICLE');

/**
 * Action generator that is dispatched when user starts operation
 * @returns {object} The action to dispatch
 */
export const createArticleLoading = () => ({
  type: createArticleType.loading,
});

/**
 * Action generator that is dispatched when operation is successful
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const createArticleSuccess = message => ({
  type: createArticleType.success,
  message,
});

/**
 * Action generator that is dispatched when operation fails
 * @param {string} message The response message
 * @returns {object} The action to dispatch
 */
export const createArticleFailure = message => ({
  type: createArticleType.failure,
  message,
});

/**
 * action creator for creating an article
 *
 * @export
 * @param string data - form data containing article details
 * @returns {object}
 */

const createArticle = (props, requestData) => async (dispatch) => {
  dispatch(createArticleLoading());
  return request({
    route: 'articles',
    method: 'post',
    payload: requestData.formData,
    token: requestData.token
  }).then((response) => {
    dispatch(createArticleSuccess(response.message));
    props.history.push(`/article/${response.data.data.slug}`);
  }).catch((error) => {
    dispatch(createArticleFailure(error.response.data.message));
  });
};

export default createArticle;
