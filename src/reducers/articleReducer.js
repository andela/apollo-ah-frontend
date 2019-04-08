import { GET_ARTICLES_SUCCESS } from '../actions/actionTypes';

const initialState = {
  articles: [],
  page: {
    "first": 1,
    "current": 1,
    "last": 1,
    "currentCount": 0,
    "totalCount": 0,
    "description": ""
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.payload.articles,
        page: action.payload.page
      };
    default:
      return state;
  }
};
