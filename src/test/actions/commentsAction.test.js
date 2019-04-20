import '@babel/polyfill';
import * as actions from '../../actions/commentsAction';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

const { postCommentTypes } = actions;

jest.mock('../../utils/request');

const payload = {
  body: 'Hello world',
  message: 'Failed',
  profile: {}
};

describe('Action creators', () => {
  it('should create the right action', () => {
    const data = {};
    const expected = {
      type: postCommentTypes.success,
      data,
    };
    expect(actions.commentsAction(postCommentTypes.success, data)).toEqual(expected);
  });
});


describe('Post Action creators', () => {
  it('should dispatch new comment data on successful post comment', () => {
    request.mockResolvedValue({ data: { data: payload } });
    const expected = [
      {
        type: postCommentTypes.loading,
        data: true,
      },
      {
        type: postCommentTypes.success,
        data: payload,
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.postComment(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message on failed post comment', () => {
    request.mockRejectedValue({ response: { data: payload } });
    const expected = [
      {
        type: postCommentTypes.loading,
        data: true,
      },
      {
        type: postCommentTypes.failure,
        data: payload.message,
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.postComment(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message on failed post comment for unknown error', () => {
    request.mockRejectedValue({});
    const expected = [
      {
        type: postCommentTypes.loading,
        data: true,
      },
      {
        type: postCommentTypes.failure,
        data: 'Please check your network connection',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.postComment(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
