import typeGenerator from './typeGenerator';
import request from '../utils/request';

export const reportArticleType = typeGenerator('REPORT_ARTICLE');

/**
 * This function clears errors from the store
 */
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: reportArticleType.failure,
    data: { error: null, loading: false }
  });
};

/**
 * This functions connects to the api and updates the store
 * @param {Object} reportData - This is a data object to be sent to the server
*/
export const reportArticle = reportData => async (dispatch) => {
  try {
    dispatch({
      type: reportArticleType.loading,
      data: { loading: true }
    });
    await request({
      route: `/articles/${reportData.articleId}/report`,
      method: 'post',
      payload: reportData,
      token: reportData.userToken
    });
    return dispatch({
      type: reportArticleType.success,
      data: { loading: false, success: true }
    });
  } catch (error) {
    let errorMessage = 'An error occured';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    return dispatch({
      type: reportArticleType.failure,
      data: { loading: false, error: errorMessage }
    });
  }
};
