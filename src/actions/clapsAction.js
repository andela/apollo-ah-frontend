import typeGenerator from './typeGenerator';
import request from '../utils/request';

export const getUserClapsType = typeGenerator('GET_USER_CLAPS');

/**
 * Triggers a success
 *
 * @param {object} payload - The user claps payload
 * @returns {object} Returns an action object
 */
export const getUserClapsSuccess = payload => ({
  type: getUserClapsType.success,
  payload,
});

/**
 * Triggers a failure
 *
 * @param {object} payload - The error object
 * @returns {object} Returns an action object
 */
export const getUserClapsFailure = payload => ({
  type: getUserClapsType.failure,
  payload,
});

/**
 * Action handler for fetching auth user's claps
 *
 * @export
 * @param {string} slug - The article resource slug
 * @returns {object} Returns an actions object
 */
export const fetchUserClaps = slug => async (dispatch) => {
  try {
    const response = await request({ route: `articles/${slug}/claps?include=user` });
    const { data: { data: claps } } = response;
    return dispatch(getUserClapsSuccess(claps));
  } catch (error) {
    return dispatch(getUserClapsFailure(error));
  }
};
