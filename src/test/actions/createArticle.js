import expect from 'expect';
import * as actions from '../../actions/createArticles';


describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const expected = {
      type: actions.createArticleType.loading,
    };
    expect({
      type: actions.resetPasswordType.loading,
    }).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.createArticleType.success,
      message: 'successful',
    };
    expect(actions.createArticleSuccess('successful')).toEqual(expected);
  });
  it('should create an action when failed', () => {
    const expected = {
      type: actions.createArticleType.failure,
      message: 'failed',
    };
    expect(actions.createArticleFailure('failed')).toEqual(expected);
  });
});
