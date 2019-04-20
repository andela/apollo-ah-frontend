import '@babel/polyfill';
import * as actions from '../../actions/commentsAction';
import { createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

const { postCommentTypes, getCommentTypes } = actions;

jest.mock('../../utils/request');

const payload = {
  body: 'Hello world',
  message: 'Failed',
  profile: {}
};

describe('Action creators', () => {
  it('should create the right action for commentsAction', () => {
    const data = {};
    const expected = {
      type: postCommentTypes.success,
      data,
    };
    expect(actions.commentsAction(postCommentTypes.success, data)).toEqual(expected);
  });
  it('should create the right action for clearCommentsAction', () => {
    const expected = {
      type: actions.clearCommentsType.success,
    };
    expect(actions.clearComments(actions.clearCommentsType.success)).toEqual(expected);
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

describe('Get Action creators', () => {
  it('should dispatch new comment data on successful get comment', () => {
    request.mockResolvedValue({ data: { data: payload } });
    const expected = [
      {
        type: getCommentTypes.loading,
        data: true,
      },
      {
        type: getCommentTypes.success,
        data: payload,
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getComments(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
  it('should dispatch error message on failed get comment', () => {
    request.mockRejectedValue({ response: { data: payload } });
    const expected = [
      {
        type: getCommentTypes.loading,
        data: true,
      },
      {
        type: getCommentTypes.failure,
        data: 'No more comments',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getComments(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });

  it('should dispatch error message on failed get comment for unknown error', () => {
    request.mockRejectedValue({});
    const expected = [
      {
        type: getCommentTypes.loading,
        data: true,
      },
      {
        type: getCommentTypes.failure,
        data: 'Please check your network connection',
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.getComments(payload)).then(() => {
      expect(store.getActions()).toEqual(expected);
    });
  });
});
