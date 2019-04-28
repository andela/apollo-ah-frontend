import {
  followType,
  unfollowType,
  getFollowersType,
  getFollowingType,
} from '../actions/followAction';
import initialState from '../store/initialState';

const { follow } = initialState;

/**
 * User followers reducer function
 *
 * @param {object} [state=follow] - The initial state to load
 * @param {object} action - The action to dispatch
 * @returns {object} - Returns the mutated state object
 */
export default (state = follow, { type, payload }) => {
  switch (type) {
    case followType.loading:
      return {
        ...state,
        isLoading: payload
      };
    case followType.success:
      return {
        ...state,
        following: [
          ...state.following,
          payload
        ],
        isLoading: false,
      };
    case followType.failure:
      return {
        ...state,
        isLoading: false
      };
    case unfollowType.success:
      return {
        ...state,
        following: state.following.filter(user => user.id !== payload.id),
        isLoading: false,
      };
    case getFollowersType.success:
      return {
        ...state,
        followers: payload,
        isLoading: false
      };
    case getFollowingType.success:
      return {
        ...state,
        following: payload,
        isLoading: false
      };
    default:
      return state;
  }
};
