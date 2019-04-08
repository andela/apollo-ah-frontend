import { loginGoogle } from '../../utils';

describe('lognGoogle()', () => {
  const mockResponse = {
    profileObj: {
      name: 'John Doe',
      email: 'johndoe@email.com',
      googleId: '3229219003',
      imageUrl: 'https://imageurl.com/image.png'
    }
  };
  
  const successCallback = jest.fn();
  const failureCallback = jest.fn();
  
  it('should call successCallback upon receiving valid response', () => {
    loginGoogle(mockResponse, successCallback, failureCallback);
    expect(successCallback).toHaveBeenCalled();
  });
  it('should call failureCallback upon receiving invalid response', () => {
    loginGoogle({ data: undefined }, successCallback, failureCallback);
    expect(failureCallback).toHaveBeenCalled();
  });
});
