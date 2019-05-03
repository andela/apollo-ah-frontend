import { getArticleType } from '../../actions/singleArticleActions';
import initialState from '../../store/initialState';
import mockArticleData from '../__mocks__/mockSingleArticleData';
import getArticleReducer from '../../reducers/singleArticleReducer';
import { mockState } from '../setup';

const initialArticleState = initialState.article;
const article = mockArticleData;
article.User = mockArticleData.author;
delete article.author;

describe('Testimng getArticle reducer', () => {
  it('should return the initial state', () => {
    expect(getArticleReducer(mockState, {})).toEqual(mockState);
  });
  it('getArticle reducer to return default state', () => {
    expect(getArticleReducer(undefined, {})).toEqual({ ...initialArticleState });
  });
  it('should handle a getArticleType.loading dispatch successfully', () => {
    const expectedResponse = { ...initialArticleState, isLoading: true };
    const result = getArticleReducer(
      { ...initialArticleState, isLoading: true }, getArticleType.loading
    );
    expect(result).toEqual({ ...expectedResponse });
  });
  it('should handle a getArticleType.success dispatch successfully', () => {
    const expectedResponse = article;
    expect(getArticleReducer(
      { ...expectedResponse }, getArticleType.success
    )).not.toEqual({ ...initialArticleState });
    expect(getArticleReducer({ ...article, message: article.message }, getArticleType.success))
      .toEqual({ ...expectedResponse });
  });
  it('should return a message with a getArticleType.failure dispatch', () => {
    const expectedResponse = { ...initialArticleState, message: 'no article with slug: yuvwe found' };
    expect(getArticleReducer(
      { ...expectedResponse }, getArticleType.failure
    )).not.toEqual({ ...initialArticleState });
    expect(getArticleReducer(
      { ...initialArticleState, message: expectedResponse.message }, getArticleType.failure
    )).toEqual({ ...expectedResponse });
  });
});
