import expect from 'expect';
import moxios from 'moxios';
import * as types from '../../actions/actionTypes';

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
      type: types.PASSWORD_RESET_REQUEST,
      isLoading: true,
      responseData: false,
    };
    expect({
      type: types.PASSWORD_RESET_REQUEST,
      isLoading: true,
      responseData: false}).toEqual(expected);
  });
});
