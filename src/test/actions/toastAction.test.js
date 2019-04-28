import { NEW_TOAST, CLEAR_TOAST } from '../../actions/actionTypes';
import { newToast, newToaster, clearToast } from '../../actions/toastAction';
import { createMockStore } from '../setup';

const mockStore = createMockStore();

describe('Toast action creators', () => {
  const payload = 'some toast message';
  it('should dispatch new toaster action', () => {
    const expectedAction = {
      type: NEW_TOAST,
      payload,
    };
    expect(newToaster(payload)).toEqual(expectedAction);
  });
  it('should dispatch new toast action', () => {
    const expectedAction = [{
      type: NEW_TOAST,
      payload,
    }];

    const store = mockStore();
    return store.dispatch(newToast(payload)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('should dispatch clear toast', () => {
    const expectedAction = [{ type: CLEAR_TOAST }];
    const store = mockStore();
    return store.dispatch(clearToast()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
