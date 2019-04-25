import reportArticleReducer from '../../reducers/reportArticleReducer';
import initialState from '../../store/initialState';
import * as actions from '../../actions/reportArticleAction';
import { mockState } from '../setup';

const { user: testState } = mockState;
const { reportArticleType } = actions;

describe('Report Article reducer tests', () => {
  it('return initial state', () => {
    expect(reportArticleReducer(undefined, {})).toEqual({
      ...initialState
    });
  });

  it('return success state', () => {
    const action = {
      type: reportArticleType.success,
      data: { loading: false, success: true }
    };
    const expected = { loading: false, success: true };
    expect(reportArticleReducer(testState, action)).toEqual(expected);
  });

  it('return failure state', () => {
    const action = {
      type: reportArticleType.failure,
      data: { loading: false, error: 'A report needs to have a data type' }
    };
    const expected = { loading: false, error: action.data.error };
    expect(reportArticleReducer(testState, action)).toEqual(expected);
  });
});
