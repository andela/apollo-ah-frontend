import expect from 'expect';
import moxios from 'moxios';
import * as actions from '../../actions/resetPassword';


const payload = {
  email: 'fejiro.gospel@andela.com',
};

const stubRequest = (response, status = 200) => {
  moxios.wait(() => {
    moxios.requests.mostRecent()
      .respondWith({
        status,
        response,
      });
  });
};

describe('Action creators', () => {
  it('should create an action to setLoading state', () => {
    const status = true;
    const expected = {
      type: actions.resetPassword.loading,
      loading: true,
      data: false,
    };
    expect({
      type: actions.resetPassword.loading,
      loading: true,
      data: false}).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.resetPassword.success,
      loading: false,
      data: 'successful',
    };
    expect(actions.requestLoadingSuccess(false, 'successful')).toEqual(expected);
  });
});
