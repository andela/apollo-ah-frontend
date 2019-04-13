const handleResponse = (res) => {
  return res.json().then(data => {
    if (res.ok) {
      return data;
    } else {
      let error = Object.assign({}, res, {
        error: data
      });
      return Promise.reject(error);
    }
  });
};

const requestOptions = (req, body, token) => {
  const options = {
    method: req,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'x-auth': token,
    }
  };
  (token) ? options.headers['x-auth'] = token : '';
  return options;
};

export default { handleResponse, requestOptions };