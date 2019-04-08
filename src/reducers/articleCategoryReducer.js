import { GET_ARTICLES_CATEGORY_SUCCESS } from '../actions/actionTypes';

const initialState = {
  category: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.payload
      };
    default:
      return state;
  }
};
