/**
 * Generates action types
 * @param {string} name A unique identifier for the action type
 * @return {object} The generated action type
 */
const typeGenerator = name => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
  clearErrors: `${name}_CLEAR_ERROR`
});

export default typeGenerator;
