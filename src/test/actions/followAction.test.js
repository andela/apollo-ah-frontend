import * as actions from '../../actions/followAction';
import { NEW_TOAST } from '../../actions/actionTypes';
import { mockState, createMockStore } from '../setup';
import request from '../../utils/request';

const mockStore = createMockStore();

jest.mock('../../utils/request');

const {
  followType,
  getFollowingType,
  getFollowersType,
  followUserAction,
  fetchFollowersAction
} = actions;
const { article: payload } = mockState;

describe('Follow action creators', () => {
  const errorMessage = 'Sorry, you cannot follow yourself';

  it('should dispatch success action upon following user', () => {
    const expected = {
      type: followType.success,
      payload,
    };
    expect(actions.followSuccess(payload)).toEqual(expected);
  });
  it('should dispatch failure action upon follow request failure', () => {
    const expected = {
      type: followType.failure,
      payload: [errorMessage],
    };
    expect(actions.followFailure([errorMessage]))
      .toEqual(expected);
  });
  it('followUserAction() should dispatch success', () => {
    request.mockResolvedValue({ data: { data: {} } });
    const expectedAction = [
      {
        type: followType.loading,
        payload: true,
      },
      {
        type: NEW_TOAST,
      },
      {
        type: followType.success,
        payload: {},
      },
    ];
    const store = mockStore();
    return store.dispatch(followUserAction('follow', 'username')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('followUserAction() should dispatch failure with error payload', () => {
    const response = {
      data: { message: errorMessage }
    };
    request.mockRejectedValue({ response });

    const expectedAction = [
      {
        type: followType.loading,
        payload: true,
      },
      {
        type: followType.failure,
        payload: [errorMessage],
      }
    ];
    const store = mockStore();
    return store.dispatch(followUserAction({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it("fetchFollowingAction('following') should dispatch success", () => {
    request.mockResolvedValue({ data: { data: [] } });
    const expectedAction = [
      {
        type: followType.loading,
        payload: true,
      },
      {
        type: getFollowingType.success,
        payload: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(fetchFollowersAction('following')).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
  it('fetchFollowersAction() should dispatch success', () => {
    request.mockResolvedValue({ data: { data: [] } });
    const expectedAction = [
      {
        type: followType.loading,
        payload: true,
      },
      {
        type: getFollowersType.success,
        payload: [],
      }
    ];
    const store = mockStore();
    return store.dispatch(fetchFollowersAction()).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
