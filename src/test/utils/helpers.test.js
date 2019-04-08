import { splitName } from '../../utils/helpers';

describe('Helper functions', () => {
  it('should split spaced character string', () => {
    expect(splitName('John Doe')).toEqual(['John', 'Doe']);
  });
});
