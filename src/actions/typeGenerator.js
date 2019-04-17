/**
 * Generates action types
 * @param {string} name A unique identifier for the action type
 * @return {object} The generated action type
 */

const typeGenerator = name => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
  error: `${name}_ERROR`,
  add_error: `${name}_ADD_ERROR`,
  clear_errors: `${name}_CLEAR_ERROR`
});

export default typeGenerator;