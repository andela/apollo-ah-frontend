import clapsReducer from '../../reducers/clapsReducer';

const mockState = {
  claps: 0,
};

describe('Claps Reducer', () => {
  it('should return the initial state', () => {
    expect(clapsReducer(mockState, {})).toEqual(mockState);
  });
});
