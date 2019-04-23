import typeGenerator from './typeGenerator';
import request from '../utils/request';

export const clapArticleType = typeGenerator('CLAP_ARTICLE');

/**
 * Triggers a clap success
 *
 * @param {boolean} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const clapArticleSuccess = payload => ({
  type: clapArticleType.success,
  payload,
});

/**
 * Triggers a clap failure
 *
 * @param {boolean} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const clapArticleFailure = payload => ({
  type: clapArticleType.failure,
  payload,
});

/**
 * Action handler for clapping article
 *
 * @export
 * @param {object} payload - The request payload
 * @param {string} payload.slug - The article slug
 * @param {number} payload.claps - The article claps to add
 * @param {token} payload.token - The user access token
 * @returns {object} Returns an actions object
 */
export const clapArticleRequest = ({ slug, claps, token }) => async (dispatch) => {
  try {
    const response = await request({
      route: `articles/${slug}/claps`,
      method: 'POST',
      payload: { claps },
      token
    });
    const { data: { data: article } } = response;
    dispatch(clapArticleSuccess(article));
  } catch (error) {
    let errorData = ['Please check your network connection'];
    if (error.response) {
      const { message, data } = error.response.data;
      errorData = [message, data];
    }
    dispatch(clapArticleFailure(errorData));
  }
};
