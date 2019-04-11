/**
 * Generates action types
 *
 * @param {string} name - The action type name
 * @returns {object} The different states for the action
 */
const typeGenerator = name => ({
  loading: `${name}_LOADING`,
  success: `${name}_SUCCESS`,
  failure: `${name}_FAILURE`,
});

export default typeGenerator;
