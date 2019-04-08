import { loginFacebook } from '../../utils';

describe('lognFacebook()', () => {
  const mockResponse = {
    id: 43243543,
    name: 'John Doe',
    email: 'johndoe@email.com',
    picture: {
      data: {
        url: 'https://imageurl.com/image.png'
      }
    }
  };
  
  const successCallback = jest.fn();
  const failureCallback = jest.fn();
  
  it('should call successCallback upon receiving valid response', () => {
    loginFacebook(mockResponse, successCallback, failureCallback);
    expect(successCallback).toHaveBeenCalled();
  });
  it('should call failureCallback upon receiving invalid response', () => {
    loginFacebook({ data: undefined }, successCallback, failureCallback);
    expect(failureCallback).toHaveBeenCalled();
  });
});
