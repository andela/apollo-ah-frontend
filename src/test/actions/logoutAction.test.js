import configureStore from 'redux-mock-store';
import { logoutSuccess, logoutType } from '../../actions/logoutAction';

const mockStore = configureStore();

describe('logoutAction test suite', () => {
  it('should match the expected action type', () => {
    const expected = {
      type: logoutType.success,
    };
    expect(logoutSuccess()).toEqual(expected);
  });

  it('dispatches logout action', () => {
    const store = mockStore({});

    store.dispatch(logoutSuccess());
    const actions = store.getActions();
    expect(actions).toMatchSnapshot();
  });
});
