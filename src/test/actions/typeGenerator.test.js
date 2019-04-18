import '@babel/polyfill';
import typeGenerator from '../../actions/typeGenerator';


describe('Action Type Generator', () => {
  it('should generate an action type', () => {
    const actionType = typeGenerator('PROFILE');
    expect(actionType).toEqual({
      loading: 'PROFILE_LOADING',
      success: 'PROFILE_SUCCESS',
      failure: 'PROFILE_FAILURE',
      add_error: 'PROFILE_ADD_ERROR',
      clear_errors: 'PROFILE_CLEAR_ERROR',
      error: 'PROFILE_ERROR'
    });
  });
});
