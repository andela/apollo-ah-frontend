import validator from 'validator';

/**
 * 
 * @param {*} payload - An object containing an email and password
 * @returns {errorMessage} - A string containing the error message
 */
export const validateFields = (payload) => {
  let errorMessage;
  const emptyEmailCheck = validator.isEmpty(payload.email);
  if (emptyEmailCheck) {
    errorMessage = 'Email address cannot be empty';
    return errorMessage;
  }

  const emptyPasswordCheck = validator.isEmpty(payload.password);
  if (emptyPasswordCheck) {
    errorMessage = 'Please provide a valid password';
    return errorMessage;
  }

  const emailCheck = validator.isEmail(payload.email);
  if (!emailCheck) {
    errorMessage = 'Please provide a valid email';
    return errorMessage;
  }

  return true;
};

export default {};
