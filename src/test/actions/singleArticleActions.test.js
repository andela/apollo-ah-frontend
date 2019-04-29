import '@babel/polyfill';
import mockAxios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockArticleData from '../__mocks__/mockSingleArticleData';
import initialState from '../../store/initialState';
import getArticle, { getArticleType } from '../../actions/singleArticleActions';

const article = mockArticleData;
article.User = mockArticleData.author;
delete article.author;

const errorObj = (slug) => {
  let errorMessage = 'Please check your network connection';
  if (slug) errorMessage = `no article with slug: ${slug} found`;
  return {
    code: 404,
    data: [],
    message: errorMessage,
    status: false
  };
};

jest.mock('../../store');
const initialArticleState = initialState.article;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const makeMockStore = (state = {}) => mockStore({ ...initialArticleState, ...state });

describe('Testing the get articles action generators', () => {
  it('should fetch an article from the DB', async (done) => {
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(
      { data: { data: article }, messsage: article.message }
    ));
    const expectedAction = [
      { type: getArticleType.loading, status: true },
      { type: getArticleType.success, data: article },
    ];
    const store = makeMockStore();
    await store.dispatch(getArticle(article.slug));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
  it('should return default state when get article is unsuccessful', async (done) => {
    const failedResponse = errorObj('ywue');
    // mockAxios.get.mockReturnValue({ data: { ...failedResponse } });
    mockAxios.get.mockImplementationOnce(() => Promise.resolve({ data: { ...failedResponse } }));
    const expectedAction = {
      type: getArticleType.failure,
      data: {},
      message: failedResponse.message
    };
    const store = makeMockStore();
    store.clearActions();
    await store.dispatch(
      { type: getArticleType.failure, data: {}, message: failedResponse.message }
    );
    const actual = store.getActions();
    expect(actual).toEqual([expectedAction]);
    done();
  });
});
