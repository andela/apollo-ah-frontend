import { toast } from 'react-toastify';
import axios from 'axios';
import formDataJSON from 'formdata-json';
import { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS, LOADING } from './actionTypes';
import { API_URL, MESSAGE } from '../utils/constants';


axios.defaults.baseURL = `${API_URL}/profiles`;
axios.defaults.method = 'post';
axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlzQ29uZmlybWVkIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAxOS0wNC0wNVQwNTozMTo1Ny41MzlaIiwidXBkYXRlZEF0IjoiMjAxOS0wNC0wNVQwNTozMTo1Ny41MzlaIiwiaWQiOjYsImVtYWlsIjoidmFsZW5zdGljYWxAZ21haWwuY28iLCJwYXNzd29yZCI6IiQyYSQxMCRURWNOV1BWOGx2WUo2clI3QXhtU1Z1emIubXF1aDRocHBjdHpxeXdhY2VGWmI5eEhId0ZHVyIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTU1NDQ0MjMxN30.KgQXfdM0LT8qBkfBu6513HZRn3rUWMLYz4WMDdLH2Cc';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';


export const isLoading = loading => ({
  type: LOADING,
  loading,
});

export const updateUserProfile = inputData => (dispatch) => {
  inputData.append('image', 'https://www.abc.com');
  dispatch(isLoading(true));
  axios({
    data: formDataJSON(inputData),
  }).then(({ data: result }) => {
    dispatch(isLoading(false));
    const { data, message } = result;
    toast.success(message);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      data,
    });
  })
    .catch((error) => {
      const { data: { data } } = error.response;
      toast.error(MESSAGE.PROFILE_UPDATE_FAILED, {
        hideProgressBar: true,
      });
      dispatch(isLoading(false));
      dispatch({
        type: UPDATE_PROFILE_FAILURE,
        data,
      });
    });
};
