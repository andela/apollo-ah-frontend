/**
 *
 *
 * @param {*} func - The function to be called by debounce function
 * @param {*} delay - The time at which the call will be delayed for
 * @returns {function}
 */
const debounceFn = (func, delay) => {
  let delayPeriod;
  return () => {
    const context = this;
    const args = [func, delay];
    clearTimeout(delayPeriod);
    delayPeriod = setTimeout(() => func.apply(context, ...args), delay);
  };
};

export default debounceFn;
