import * as selectors from '../../selectors/navbarSelector';
import { mockState } from '../setup';


describe('isLoggedIn selector', () => {
  it('should return the right value', () => {
    const result = selectors.isLoggedInSelector(mockState);
    expect(result).toEqual(mockState.user.isLoggedIn);
  });
});

describe('profileImage selector', () => {
  it('should return the right value', () => {
    const result = selectors.profileImageSelector(mockState);
    expect(result).toEqual(mockState.user.profile);
  });
});

describe('getIsLoggedIn selector', () => {
  it('should return the right value', () => {
    const result = selectors.getIsLoggedIn(mockState);
    expect(result).toEqual(mockState.user.isLoggedIn);
  });
});

describe('getProfile selector', () => {
  it('should return the right value', () => {
    const result = selectors.getProfile(mockState);
    expect(result).toEqual(mockState.user.profile);
  });
});
