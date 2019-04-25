import '@babel/polyfill';
import typeGenerator from '../../actions/typeGenerator';


describe('Action Type Generator', () => {
  it('should generate an action type', () => {
    const actionType = typeGenerator('PROFILE');
    expect(actionType).toEqual({
      loading: 'PROFILE_LOADING',
      success: 'PROFILE_SUCCESS',
      failure: 'PROFILE_FAILURE',
      clearErrors: 'PROFILE_CLEAR_ERROR'
    });
  });
});
