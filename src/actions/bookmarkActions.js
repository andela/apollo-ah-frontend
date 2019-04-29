import request from '../utils/request';
import typeGenerator from './typeGenerator';

export const bookmarkArticleType = typeGenerator('BOOKMARK_ARTICLE');

export const bookmarkLoading = (type, status) => ({ type, status });
export const bookmarkArticleProcess = (type, data, message) => ({ type, data, message });

/**
 * @function bookmarkArticleGenerators - The action creator that dispatches
 * the bookmarkArticleProcess action generators
 * @param {*} token - The user's token
 * @param {*} slug - The article's slug
 * @param {*} dispatch - The redux dispatch action
 * @returns
 */
export const bookmarkArticleGenerators = ({ slug }) => async (dispatch) => {
  dispatch(bookmarkLoading(bookmarkArticleType.loading, true));
  return request({
    method: 'post',
    payload: null,
    route: `articles/${slug}/bookmarks`
  }).then((response) => {
    const feedback = response.data;
    const { data, message } = feedback;
    dispatch(bookmarkArticleProcess(bookmarkArticleType.success, data, message));
  }).catch((error) => {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    dispatch(bookmarkArticleProcess(bookmarkArticleType.failure, errorMessage));
  });
};
