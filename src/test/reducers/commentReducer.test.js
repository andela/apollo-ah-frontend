import '@babel/polyfill';
import { postCommentReducer, getCommentsReducer } from '../../reducers/commentsReducer';
import { getCommentTypes, postCommentTypes, clearCommentsType } from '../../actions/commentsAction';
import { mockState } from '../setup';

const { article: testState } = mockState;
const data = {
  id: 1,
  body: 'Hello world',
  createdAt: 'July 4th 2018',
  profile: {
    firstname: 'John',
    username: 'jonny',
    image: 'image.jpg',
  }
};
const newComment = [{
  body: data.body,
  id: data.id,
  createdAt: data.createdAt,
  author: {
    Profile: {
      firstname: data.profile.firstname,
      username: data.profile.username,
      image: data.profile.image,
    }
  }
}];


describe('Post Comment Reducer', () => {
  it('should return the initial state no action type is matched', () => {
    expect(postCommentReducer(testState, {})).toEqual(testState);
  });
  it('should return the initial state if it is not set', () => {
    expect(postCommentReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when posting comment', () => {
    const action = { type: postCommentTypes.loading, data: true };
    const expected = { ...testState, postingComment: true };
    expect(postCommentReducer(testState, action)).toEqual(expected);
  });
  it('should return the correct state for a successfully posted comment', () => {
    const action = { type: postCommentTypes.success, data };
    const expected = {
      ...testState,
      postingComment: false,
      commentPage: {
        ...testState.commentPage,
        totalCount: 2
      },
      newComments: newComment
    };
    expect(postCommentReducer(testState, action)).toEqual(expected);
  });
  it('should return the correct state for a unsuccessfully posted comment', () => {
    const action = { type: postCommentTypes.failure, data: 'failed' };
    const expected = { ...testState, postingComment: false, commentMessage: 'failed' };
    expect(postCommentReducer(testState, action)).toEqual(expected);
  });
});

describe('Get Comment Reducer', () => {
  it('should return the initial state no action type is matched', () => {
    expect(getCommentsReducer(testState, {})).toEqual(testState);
  });
  it('should return the initial state if it is not set', () => {
    expect(getCommentsReducer(undefined, {})).toEqual({});
  });
  it('should return the correct state when posting comment', () => {
    const action = { type: getCommentTypes.loading, data: true };
    const expected = { ...testState, gettingComments: true };
    expect(getCommentsReducer(testState, action)).toEqual(expected);
  });
  it('should return the correct state after successfully getting comment', () => {
    const action = {
      type: getCommentTypes.success,
      data: {
        articles: {},
        page: {
          current: 1,
          last: 1
        }
      }
    };
    const expected = {
      ...testState,
      gettingComments: false,
      oldComments: {},
      commentPage: action.data.page,
      hasMoreComments: false,
    };
    expect(getCommentsReducer(testState, action)).toEqual(expected);
  });

  it('should return the correct state after unsuccessful get comment operation', () => {
    const action = {
      type: getCommentTypes.failure,
      data: 'failed'
    };
    const expected = {
      ...testState,
      gettingComments: false,
      oldComments: [],
      commentMessage: 'failed',
    };
    expect(getCommentsReducer(testState, action)).toEqual(expected);
  });


  it('should return the correct state when we clear the comments', () => {
    const action = {
      type: clearCommentsType.success,
    };
    const expected = {
      ...testState,
      oldComments: [],
      hasMoreComments: false,
      commentPage: {},
      commentMessage: '',
      newComments: [],
    };
    expect(getCommentsReducer(testState, action)).toEqual(expected);
  });
});
