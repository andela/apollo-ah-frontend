import axios from 'axios';
import typeGenerator from './typeGenerator';


export const reportArticleType = typeGenerator('REPORT_ARTICLE');

/**
 * This function clears errors from the store
 */
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: reportArticleType.clearErrors,
    data: { loading: false, error: null }
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
    const config = {
      headers: {
        Authorization: `Bearer ${reportData.userToken}`,
      }
    };
    const result = await axios.post(`${process.env.API_BASE_URL}/articles/${reportData.articleId}/report`,
      reportData, config);
    dispatch({
      type: reportArticleType.success,
      data: { loading: false, success: true }
    });
    console.log(result);
  } catch (error) {
    console.log(error.response);
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
