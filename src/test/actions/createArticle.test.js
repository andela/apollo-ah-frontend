import expect from 'expect';
import * as actions from '../../actions/createArticles';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');


describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const expected = {
      type: actions.createArticleType.loading,
      message: false,
    };
    expect({
      type: actions.createArticleType.loading,
      message: false,
    }).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.createArticleType.success,
      message: 'successful',
    };
    expect(actions.createArticleSuccess('successful')).toEqual(expected);
  });
  it('should create an action when failed', () => {
    const expected = {
      type: actions.createArticleType.failure,
      message: 'failed',
    };
    expect(actions.createArticleFailure('failed')).toEqual(expected);
  });
  it('should dispatch correctly for unknown error', () => {
    request.mockRejectedValue({});

    const expected = [
      {
        type: actions.createArticleType.loading,
      },
      {
        type: actions.createArticleType.failure,
        message: 'Please check your network connection',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.createArticle('', { formData: {} })).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
