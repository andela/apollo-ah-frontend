import '@babel/polyfill';
import bookmarkArticleReducer from '../../reducers/bookmarkArticleReducer';
import { bookmarkArticleType } from '../../actions/bookmarkActions';
import { mockState } from '../setup';
import mockData from '../__mocks__/mockLoginData';

const { bookmarkedList } = mockState;
const { bookmarkSuccess } = mockData;

describe('Bookmark Reducer', () => {
  it('should return the initial state', () => {
    expect(bookmarkArticleReducer(mockState, {})).toEqual(mockState);
  });
  it('should return the initial state if it is not set', () => {
    expect(bookmarkArticleReducer(undefined, {})).toEqual(bookmarkedList);
  });
  it('should handle when bookmark is loading', () => {
    const data = { bookmarked: bookmarkedList.bookmarked, isLoading: true };
    const type = bookmarkArticleType.loading;
    const expectedResponse = { bookmarked: bookmarkedList.bookmarked, isLoading: true };
    const result = bookmarkArticleReducer(data, type);
    expect(result).toEqual({ ...expectedResponse });
  });
  it('should handle when bookmark is successful', () => {
    const data = { bookmarked: [bookmarkSuccess.data], isLoading: false };
    const type = bookmarkArticleType.success;
    const expectedResponse = { bookmarked: [bookmarkSuccess.data], isLoading: false };
    const result = bookmarkArticleReducer(data, type);
    expect(result).toEqual({ ...expectedResponse });
  });
  it('should handle when bookmark is unsuccessful', () => {
    const data = { bookmarked: [], isLoading: false };
    const type = bookmarkArticleType.failure;
    const expectedResponse = { bookmarked: bookmarkedList.bookmarked, isLoading: false };
    const result = bookmarkArticleReducer(data, type);
    expect(result).toEqual({ ...expectedResponse });
  });
});
