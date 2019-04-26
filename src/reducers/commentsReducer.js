import { getCommentTypes, postCommentTypes, clearCommentsType } from '../actions/commentsAction';

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
        commentPage: {
          ...state.commentPage,
          totalCount: state.commentPage.totalCount + 1
        },
        newComments: [{
          body: data.body,
          createdAt: data.createdAt,
          id: data.id,
          author: {
            Profile: {
              image: data.profile.image,
              firstname: data.profile.firstname,
              username: data.profile.username
            }
          }
        }]
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
    case getCommentTypes.success:
      return {
        ...state,
        gettingComments: false,
        oldComments: data.articles,
        commentPage: data.page,
        hasMoreComments: data.page.current < data.page.last,
      };
    case getCommentTypes.failure:
      return {
        ...state,
        gettingComments: false,
        commentMessage: data,
        oldComments: [],
      };
    case clearCommentsType.success:
      return {
        ...state,
        oldComments: [],
        hasMoreComments: false,
        commentPage: {},
        commentMessage: '',
        newComments: [],
      };
    default:
      return state;
  }
};
