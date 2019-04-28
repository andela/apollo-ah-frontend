/**
 * Exception handler
 *
 * @param {Error} error - The Error object
 * @returns {Array} - A list of error information
 */
const exceptionHandler = (error) => {
  let errorData = ['Please check your network connection'];
  if (error.response) {
    const { message, data } = error.response.data;
    errorData = [message, data];
  }
  return errorData;
};

export default exceptionHandler;
