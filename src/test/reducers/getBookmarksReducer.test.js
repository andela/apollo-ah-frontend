import getBookmarkReducer from '../../reducers/getBookmarkReducer';
import { getBookmarkType } from '../../actions/getBookmark';
import { mockState } from '../setup/index';

const { bookmark } = mockState;

describe('Get bookmark articles reducer: ', () => {
  it('should have the correct default state', () => {
    expect(getBookmarkReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      articles: [],
      message: '',
    });
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: getBookmarkType.loading,
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = { ...bookmark, loading: true };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: getBookmarkType.success,
      payload: [],
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = { ...bookmark, loading: false, articles: [] };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: getBookmarkType.failure,
      message: undefined
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = { ...bookmark, loading: false, message: undefined };
    expect(result).toEqual(expected);
  });
});
