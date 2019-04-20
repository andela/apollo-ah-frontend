import { getCommentTypes, postCommentTypes } from '../actions/commentsAction';

/**
 * A reducer that formats the data before updating the redux store with the new comment
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export const postCommentReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case postCommentTypes.loading:
      return { ...state, postingComment: data };
    case postCommentTypes.success:
      return {
        ...state,
        postingComment: false,
        newComment: {
          body: data.body,
          date: data.createdAt,
          id: data.id,
          authorImage: data.profile.image,
          authorName: data.profile.firstname || data.profile.username
        }
      };
    case postCommentTypes.failure:
      return { ...state, postingComment: false, commentMessage: data };
    default:
      return state;
  }
};

/**
 * A reducer that formats the data before updating the redux store with the list of comments
 * @param {object} state A copy of the redux state
 * @param {object} action The action containing the type and values to be used to update the store
 * @returns {object} The expected new state of the redux store
 */
export const getCommentsReducer = (state = {}, action) => {
  const { type, data } = action;
  switch (type) {
    case getCommentTypes.loading:
      return { ...state, gettingComments: data };
    default:
      return state;
  }
};
