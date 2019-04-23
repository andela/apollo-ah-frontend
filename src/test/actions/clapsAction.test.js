import * as actions from '../../actions/clapsAction';
import { mockState, createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

const { clapArticleType } = actions;
const { article: payload } = mockState;

describe('Action creators', () => {
  it('should dispatch success action upon clapping article', () => {
    const expected = {
      type: clapArticleType.success,
      payload,
    };
    expect(actions.clapArticleSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon clapping article', () => {
    const expected = {
      type: clapArticleType.failure,
      payload: [{ error: 'some error' }],
    };
    expect(actions.clapArticleFailure([{ error: 'some error' }])).toEqual(expected);
  });
  it('should dispatch success', () => {
    request.mockResolvedValue({ data: { data: {} } });
    const expectedAction = [
      {
        type: clapArticleType.success,
        payload: {},
      }
    ];
    const store = mockStore();
    return store.dispatch(actions.clapArticleRequest({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
