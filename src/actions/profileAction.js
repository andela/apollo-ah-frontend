import { toast } from 'react-toastify';
import axios from 'axios';
import formDataJSON from 'formdata-json';
import { MESSAGE } from '../utils/constants';
import { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from './actionTypes';

axios.defaults.baseURL = `${process.env.API_BASE_URL}/profiles`;
axios.defaults.method = 'post';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const setIsLoading = (type, status) => ({ type, status, });

export const signalUpdateStatus = (type, data) => ({ type, data, });

export const updateUserProfile = (type, inputData) => (dispatch) => {
  const profile = inputData.username === undefined ? formDataJSON(inputData) : inputData;
  dispatch(setIsLoading(type, true));
  return axios({
    data: profile,
    headers: {
      Authorization: `Bearer ${profile.token}`
    }
  }).then(({ data: result }) => {
    dispatch(setIsLoading(type, false));
    const { data, message } = result;
    toast.success(message);
    dispatch(signalUpdateStatus(UPDATE_PROFILE_SUCCESS, data));
  })
    .catch((error) => {
      const { data: { data } } = error.response;
      toast.error(MESSAGE.PROFILE_UPDATE_FAILED, {
        hideProgressBar: true,
      });
      dispatch(setIsLoading(type, false));
      dispatch(signalUpdateStatus(UPDATE_PROFILE_FAILURE, data));
    });
};
