import createArticleReducer from '../../reducers/createArticleReducer';
import { createArticleType } from '../../actions/createArticles';
import { mockState } from '../setup/index';

const { createArticle } = mockState;

console.log(createArticle)

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(createArticleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      loading: false,
      message: false,
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: createArticleType.success,
      message: 'successful'
    };
    const result = createArticleReducer(createArticle, action);
    const expected = { ...createArticle, loading: false, message: 'successful' };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: createArticleType.failure,
      message: 'failed'
    };
    const result = createArticleReducer(createArticle, action);
    const expected = { ...createArticle, loading: false, message: 'failed' };
    expect(result).toEqual(expected);
  });
});
