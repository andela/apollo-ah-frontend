import * as selectors from '../../selectors/clapsSelector';
import { mockState } from '../setup';

describe('getUserClaps selector', () => {
  it('should return the correct value', () => {
    const result = selectors.getUserClaps(mockState);
    expect(result).toEqual(mockState.userClaps.claps);
  });
});
