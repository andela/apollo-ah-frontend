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
      page: {
        first: 1,
        current: 1,
        last: 1,
        currentCount: 0,
        totalCount: 0,
        description: ''
      },
      message: '',
    });
  });

  it('should update the reducer state when loading', () => {
    const action = {
      type: getBookmarkType.loading,
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = {
      ...bookmark, loading: true
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: getBookmarkType.success,
      payload: {
        page: {
          first: 1,
          current: 1,
          last: 1,
          currentCount: 0,
          totalCount: 0,
          description: ''
        },
      },
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = {
      ...bookmark,
      loading: false,
      articles: action.payload,
      page: action.payload.page
    };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: getBookmarkType.failure,
      payload: {
        page: {
          first: 1,
          current: 1,
          last: 1,
          currentCount: 0,
          totalCount: 0,
          description: ''
        },
      },
    };
    const result = getBookmarkReducer(bookmark, action);
    const expected = { ...bookmark, message: action.payload };
    expect(result).toEqual(expected);
  });
});
