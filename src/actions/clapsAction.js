import typeGenerator from './typeGenerator';
import request from '../utils/request';

export const userClapsType = typeGenerator('GET_USER_CLAP');
export const clapArticleType = typeGenerator('CLAP_ARTICLE');

/**
 * Action creator that is dispatched upon successfully clapping on article
 *
 * @param {object} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const clapArticleSuccess = payload => ({
  type: clapArticleType.success,
  payload,
});

/**
 * Action creator that is dispatched if there's failure clapping on article
 *
 * @param {object} payload - The user payload state
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
 * @param {string} payload.token - The user access token
 * @returns {void}
 */
export const clapArticleRequest = ({ slug, claps }) => async (dispatch) => {
  try {
    const response = await request({
      route: `articles/${slug}/claps`,
      method: 'POST',
      payload: { claps },
    });
    const { data: { data: article } } = response;
    dispatch(clapArticleSuccess(article));
  } catch (error) {
    let errorData = ['Please check your network connection'];
    if (error.response) {
      const { message, data } = error.response.data;
      errorData = { message, data };
    }
    dispatch(clapArticleFailure(errorData));
  }
};

/**
 * Action creator that is dispatched upon successfully fetching user claps
 *
 * @param {number} payload - The user payload state
 * @returns {object} - Returns an action object
 */
export const getUserClapsSuccess = payload => ({
  type: userClapsType.success,
  payload,
});

/**
 * Action handler for fetching user claps
 *
 * @export
 * @param {object} payload - The request payload
 * @param {string} payload.slug - The article slug
 * @param {number} payload.userId - The user id
 * @returns {void}
 */
export const fetchUserClaps = ({ slug, userId }) => async (dispatch) => {
  const response = await request({ route: `articles/${slug}/claps/${userId}`, method: 'post' });
  const { data: { data: claps } } = response;
  dispatch(getUserClapsSuccess(claps));
};
