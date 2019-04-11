// mocking axios
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};
