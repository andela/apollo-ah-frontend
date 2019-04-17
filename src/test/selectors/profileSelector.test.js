import * as selectors from '../../selectors/profileSelector';
import { mockState } from '../setup';


describe('Updating Profile Selector', () => {
  it('should return the right value', () => {
    const result = selectors.updatingProfileSelector(mockState);
    expect(result).toEqual(mockState.user.profile.loading);
  });
});

describe('Error Data Selector', () => {
  it('should return the right value', () => {
    const result = selectors.errorDataSelector(mockState);
    expect(result).toEqual(mockState.user.profile.errorData);
  });
});
describe('Token Selector', () => {
  it('should return the right value', () => {
    const result = selectors.tokenSelector(mockState);
    expect(result).toEqual(mockState.user.token);
  });
});

describe('Profile Selector', () => {
  it('should return the right value', () => {
    const result = selectors.profileSelector(mockState);
    expect(result).toEqual(mockState.user.profile);
  });
});

describe('Get updating profile selector', () => {
  it('should return the right value', () => {
    const result = selectors.getUpdatingProfile(mockState);
    expect(result).toEqual(mockState.user.profile.loading);
  });
});

describe('Get error data selector', () => {
  it('should return the right value', () => {
    const result = selectors.getErrorData(mockState);
    expect(result).toEqual(mockState.user.profile.errorData);
  });
});

describe('Get token selector', () => {
  it('should return the right value', () => {
    const result = selectors.getToken(mockState);
    expect(result).toEqual(mockState.user.token);
  });
});

describe('Get profile selector', () => {
  it('should return the right value', () => {
    const result = selectors.getProfile(mockState);
    expect(result).toEqual(mockState.user.profile);
  });
});
