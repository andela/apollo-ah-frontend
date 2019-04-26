import articleReducer from '../../reducers/articleReducer';
import { getArticlesType } from '../../actions/articleAction';

const articleState = {
  articles: [],
  page: {
    first: 1,
    current: 1,
    last: 1,
    currentCount: 0,
    totalCount: 0,
    description: ''
  },
  loading: '',
  error: ''
};

describe('Reset password reducer: ', () => {
  it('should have the correct default state', () => {
    expect(articleReducer(undefined, {
      type: 'non-existent type'
    })).toEqual({
      articles: [],
      page: {
        first: 1,
        current: 1,
        last: 1,
        currentCount: 0,
        totalCount: 0,
        description: ''
      },
      loading: '',
      error: ''
    });
  });

  it('should update the reducer state when successful', () => {
    const action = {
      type: getArticlesType.success,
      articles: [],
      page: 1,
    };
    const result = articleReducer(articleState, action);
    const expected = { ...articleState, articles: [], page: 1 };
    expect(result).toEqual(expected);
  });

  it('should update the reducer state when unsuccessful', () => {
    const action = {
      type: getArticlesType.failure,
      articles: '',
      error: '',
      loading: false
    };
    const result = articleReducer(articleState, action);
    const expected = {
      ...articleState, loading: false, articles: '', error: ''
    };
    expect(result).toEqual(expected);
  });
});
