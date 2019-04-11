import axios from 'axios';
import { requestLoading, requestLoadingSuccess } from './actionCreators';


const apiUrl = process.env.API_BASE_URL;

/**
 * reset password action creator
 *
 * @export
 * @param string email - user's email address
 * @returns {object}
 */

const passwordResetRequest = email => {
  return async (dispatch) => {
    dispatch(requestLoading(true, false));
    try {
      const { data } = await axios.post(`${apiUrl}/api/v1/users/forgot_password`, { email });
      dispatch(requestLoadingSuccess(false, data.message));
    } catch (error) {
      dispatch(requestLoadingSuccess(false, error.response.data.data[0].message));
    }
  };
};

export default passwordResetRequest;
