import * as selectors from '../../selectors/commentsSelector';
import { mockState } from '../setup';


describe('Posting comment Selector', () => {
  it('should return the right value', () => {
    const result = selectors.postingCommentSelector(mockState);
    expect(result).toEqual(mockState.article.postingComment);
  });
});

describe('New comment Selector', () => {
  it('should return the right value', () => {
    const result = selectors.newCommentSelector(mockState);
    expect(result).toEqual(mockState.article.newComment);
  });
});

describe('Comment Message Selector', () => {
  it('should return the right value', () => {
    const result = selectors.commentMessageSelector(mockState);
    expect(result).toEqual(mockState.article.commentMessage);
  });
});

describe('Get posting comment Selector', () => {
  it('should return the right value', () => {
    const result = selectors.getPostingComment(mockState);
    expect(result).toEqual(mockState.article.postingComment);
  });
});

describe('Get new comment Selector', () => {
  it('should return the right value', () => {
    const result = selectors.getNewComment(mockState);
    expect(result).toEqual(mockState.article.newComment);
  });
});

describe('Get comment message Selector', () => {
  it('should return the right value', () => {
    const result = selectors.getCommentMessage(mockState);
    expect(result).toEqual(mockState.article.commentMessage);
  });
});
