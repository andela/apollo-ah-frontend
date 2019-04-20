import '@babel/polyfill';
import { postCommentReducer, getCommentsReducer } from '../../reducers/commentsReducer';
import { getCommentTypes, postCommentTypes } from '../../actions/commentsAction';
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
const newComment = {
  body: data.body,
  id: data.id,
  date: data.createdAt,
  authorName: data.profile.firstname,
  authorImage: data.profile.image,
};


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
    const expected = { ...testState, postingComment: false, newComment };
    expect(postCommentReducer(testState, action)).toEqual(expected);
  });
  it('should use the username if firstname is not provided on successful dispatch', () => {
    data.profile.firstname = '';
    newComment.authorName = data.profile.username;
    const action = { type: postCommentTypes.success, data };
    const expected = { ...testState, postingComment: false, newComment };
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
});
