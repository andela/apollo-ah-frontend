import request from '../utils/request';
import typeGenerator from './typeGenerator';

// const API_URL = process.env.API_BASE_URL;

export const bookmarkArticleType = typeGenerator('BOOKMARK_ARTICLE');

export const bookmarkLoading = (type, status) => ({ type, status });
export const bookmarkArticleProcess = (type, data) => ({ type, data });

export const bookmarkArticleGenerators = ({ slug, token }) => async (dispatch) => {
  let data;
  dispatch(bookmarkLoading(bookmarkArticleType.loading, true));
  return request({
    method: 'post',
    payload: null,
    token,
    route: `articles/${slug}/bookmarks`
  }).then((response) => {
    const feedback = response.data;
    if (feedback.message === 'successfully bookmarked this article') {
      const bookmarkedData = feedback.data;
      data = bookmarkedData;
      return dispatch(bookmarkArticleProcess(bookmarkArticleType.success, data));
    }
    return dispatch(bookmarkArticleProcess(bookmarkArticleType.success, feedback.message));
  }).catch((error) => {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    dispatch(bookmarkArticleProcess(bookmarkArticleType.failure, errorMessage));
  });
};
