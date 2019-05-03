import exceptionHandler from '../../utils/exceptionHandler';

describe('exceptionHandler()', () => {
  it('should return network error', () => {
    expect(exceptionHandler({})).toEqual(['Please check your network connection']);
  });
  it('should return a list of error information without data', () => {
    const message = 'some error information';
    const errorData = {
      response: { data: { message } }
    };
    expect(exceptionHandler(errorData)).toEqual([message]);
  });
  it('should return a list of error information with data', () => {
    const message = 'some error information';
    const errorData = {
      response: { data: { message, data: [] } }
    };
    expect(exceptionHandler(errorData)).toEqual([message, []]);
  });
});
