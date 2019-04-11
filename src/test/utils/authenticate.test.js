import '@babel/polyfill';
import isLoggedIn from '../../utils/authenticate';

describe('isLoggedIn', () => {
  it('should return a boolean', () => {
    const result = isLoggedIn();
    expect(typeof result === 'boolean').toBe(true);
  });
});
