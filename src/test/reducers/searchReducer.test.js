import searchReducer from '../../reducers/searchReducer';
import { searchTypes } from '../../actions/searchAction';

describe('Search Reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer({}, {})).toEqual({});
  });
  it('should return the initial state if it is not set', () => {
    expect(searchReducer(undefined, {})).toEqual({});
  });
  it('should handle successful operation', () => {
    const result = searchReducer({}, { type: searchTypes.success, data: {} });
    const expected = {
      loading: false, message: null
    };
    expect(result).toEqual(expected);
  });
  it('should handle failed operation', () => {
    const result = searchReducer({}, { type: searchTypes.failure, data: 'failed' });
    const expected = {
      loading: false, message: 'failed'
    };
    expect(result).toEqual(expected);
  });
  it('should handle ongoing operation', () => {
    const result = searchReducer({}, { type: searchTypes.loading });
    const expected = {
      loading: true
    };
    expect(result).toEqual(expected);
  });
});
