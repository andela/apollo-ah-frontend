import expect from 'expect';
import * as actions from '../../actions/getBookmark';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

describe('Action creators', () => {
  it('should dispatch correctly when successful', () => {
    request.mockResolvedValue({ data: { data: [] } });

    const expected = [
      {
        type: actions.getBookmarkType.loading,
        payload: true,
      },
      {
        type: actions.getBookmarkType.success,
        payload: [],
      }
    ];
    const store = mockStore();

    return store.dispatch(actions.getBookmarkedArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch correctly when not successful', () => {
    request.mockRejectedValue({ response: { data: { message: 'fail' } } });

    const expected = [
      {
        type: actions.getBookmarkType.loading,
        payload: true,
      },
      {
        type: actions.getBookmarkType.failure,
        payload: 'fail',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getBookmarkedArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch correctly for unknown error', () => {
    request.mockRejectedValue({});

    const expected = [
      {
        type: actions.getBookmarkType.loading,
        payload: true,
      },
      {
        type: actions.getBookmarkType.failure,
        payload: 'Please check your network connection',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getBookmarkedArticles()).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
