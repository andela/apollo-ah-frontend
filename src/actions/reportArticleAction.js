import axios from 'axios';
import typeGenerator from './typeGenerator';


export const reportArticleType = typeGenerator('REPORT_ARTICLE');


/**
 * This functions connects to the api and updates the store
*/
export const reportArticle = reportData => async (dispatch) => {
  try {
    dispatch({
      type: reportArticleType.loading,
      payload: { loading: true }
    });
    const result = await axios.post(`${process.env.API_BASE_URL}/articles/${reportData.articleId}/report`,
      reportData);
    console.log(result);
  } catch (error) {
    // let errorMessage = 'Please check your network connection';
    // if (error.response) {
    //   const { message } = error.response.data;
    //   errorMessage = message;
    // }
    // return dispatch(loginProcess(loginType.failure, errorMessage));
  }
};
