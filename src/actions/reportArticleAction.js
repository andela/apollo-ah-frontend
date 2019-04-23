import axios from 'axios';
import typeGenerator from './typeGenerator';


export const reportArticleType = typeGenerator('REPORT_ARTICLE');


/**
 * @function userLogin - This is an action generator which dispatches an action
 * @param {*} payload - The dispatch payload. receives user email and password
 * @param {*} dispatch - the redux store dispatch function
*/
export const reportArticle = (reportData) => {
async (dispatch) => {
  try {
    dispatch({
      type: reportArticleType.loading,
      payload: { loading: true }
    });
    const result = await axios.post(`${process.env.API_BASE_URL}/users/login`, reportData);
    const { token } = await result.data;
    const profile = decodeToken(token);
    return dispatch(loginProcess(loginType.success, { token, profile }));
  } catch (error) {
    let errorMessage = 'Please check your network connection';
    if (error.response) {
      const { message } = error.response.data;
      errorMessage = message;
    }
    return dispatch(loginProcess(loginType.failure, errorMessage));
  }
}
};

