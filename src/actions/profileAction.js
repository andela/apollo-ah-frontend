import { toast } from 'react-toastify';
import axios from 'axios';
import formDataJSON from 'formdata-json';
import { MESSAGE } from '../utils/constants';
import { UPDATE_PROFILE_FAILURE, UPDATE_PROFILE_SUCCESS } from './actionTypes';

axios.defaults.baseURL = `${process.env.API_BASE_URL}/profiles`;
axios.defaults.method = 'post';
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export const setIsLoading = (type, status) => ({ type, status, });

export const signalUpdateStatus = (type, data) => ({ type, data, });

export const updateUserProfile = (type, inputData) => async (dispatch) => {
  const profile = inputData.username === undefined ? formDataJSON(inputData) : inputData;
  dispatch(setIsLoading(type, true));

  try {
    const response = await axios({ data: profile, headers: { Authorization: `Bearer ${profile.token}` } });
    dispatch(setIsLoading(type, false));
    const { data: result } = response;
    const { data, message } = result;
    toast.success(message);
    dispatch(signalUpdateStatus(UPDATE_PROFILE_SUCCESS, data));
  } catch (error) {
    const { response } = error;
    let message = 'Please check your network connection';
    let result = [{}];
    if (response) {
      message = MESSAGE.PROFILE_UPDATE_FAILED;
      result = response.data.data;
    }
    toast.error(message, {
      hideProgressBar: true,
    });
    dispatch(setIsLoading(type, false));
    dispatch(signalUpdateStatus(UPDATE_PROFILE_FAILURE, result));
  }
};
