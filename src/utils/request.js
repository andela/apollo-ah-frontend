import axios from 'axios';

axios.defaults.baseURL = `${process.env.API_BASE_URL}`;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

/**
 * Helper function that configures axios requests
 * @param {object} config The configuration data.
 * route - The route to make request to. e.g profiles, search?q=term&size=5
 * method - The HTTP method to use. e.g post, get, patch,
 * payload - The request body payload
 * token - The authorization token to use if any
 * @returns {Promise} The axios promise
 */
const request = async (
  {
    route,
    method,
    payload,
    token
  }
) => {
  method = method || 'get';
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  if (!token) {
    delete headers.Authorization;
  }
  return axios({
    data: payload,
    url: route,
    method,
    headers
  });
};

export default request;
