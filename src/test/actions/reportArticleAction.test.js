import expect from 'expect';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import * as actions from '../../actions/reportArticleAction';
import request from '../../utils/request';
import { success, reportData, failure } from '../__mocks__/reportArticleData';
import initialState from '../../store/initialState';


jest.mock('../../utils/request');
const initialUserState = initialState.user;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const makeMockStore = (state = {}) => mockStore({ ...initialUserState, ...state });


describe('Report Article Action tests', () => {
  it('should report an article and update the store properly', async (done) => {
    request.mockResolvedValue({ data: { data: { ...success } } });
    const expectedAction = [
      { type: actions.reportArticleType.loading, data: { loading: true } },
      { type: actions.reportArticleType.success, data: { success: true, loading: false } },
    ];
    const store = makeMockStore();
    await store.dispatch(actions.reportArticle({ ...reportData }));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
  it('should report an article and update the store properly', async (done) => {
    const { response } = failure;
    request.mockRejectedValue({ response: { data: { ...response } } });
    const expectedAction = [
      { type: actions.reportArticleType.loading, data: { loading: true } },
      {
        type: actions.reportArticleType.failure,
        data: { loading: false, error: response.message }
      },
    ];
    const store = makeMockStore();
    await store.dispatch(actions.reportArticle({ ...reportData }));
    const actual = store.getActions();
    expect(actual).toEqual(expectedAction);
    done();
  });
});
