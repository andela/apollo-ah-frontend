// mocking axios
const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
// export default mockAxios;
export default {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  post: mockAxios
};