import { getBookmarkType } from '../actions/getBookmark';

const initialState = {
  loading: false,
  articles: [],
};

/**
 * reset password action creator
 *
 * @export
 * @param {object} state - initial state
 * @param {object} action - to update state
 * @returns {object}
 */

export default function getBookmarkReducer(state = initialState, action = {}) {
  const { type, payload, message } = action;
  switch (type) {
    case getBookmarkType.loading:
      return { ...state, loading: true };
    case getBookmarkType.success:
      return { ...state, loading: false, articles: payload };
    case getBookmarkType.failure:
      return { ...state, loading: false, message };
    default:
      return state;
  }
}
