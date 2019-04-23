import singleArticleReducer from '../../reducers/singleArticleReducer';
import { clapArticleType } from '../../actions/clapsAction';
import { mockState } from '../setup';

const { article: testState } = mockState;

describe('Profile Reducer', () => {
  it('should return the initial state', () => {
    expect(singleArticleReducer(mockState, {})).toEqual(mockState);
  });
  it('should handle clap article failure state', () => {
    const errorData = { message: 'some error' };
    const action = {
      type: clapArticleType.failure,
      payload: [errorData]
    };
    const result = singleArticleReducer(testState, action);
    const expected = {
      ...testState,
      error: [errorData]
    };
    expect(result).toEqual(expected);
  });
  it('should handle clap article success state', () => {
    const article = { ...testState };
    const action = {
      type: clapArticleType.success,
      payload: article
    };
    const result = singleArticleReducer(testState, action);
    const expected = { ...testState };
    expect(result).toEqual(expected);
  });
});
