
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
