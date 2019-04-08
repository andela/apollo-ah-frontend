import { GET_ARTICLES_CATEGORY_SUCCESS, GET_ARTICLES_CATEGORY_FAILURE } from './actionTypes';
import http from '../services/http';

export const ActionResponse = (actionType, category) => ({
  type: actionType,
  payload: category
});

export const getArticlesCategory = () => async(dispatch) => {
  try {
    const response = await http.get('/categories?size=6');
    const { data: { data } } = response;
    if (response.status === 404) {
      dispatch(ActionResponse(GET_ARTICLES_CATEGORY_FAILURE, 'Category not found'));
    }
    dispatch(ActionResponse(GET_ARTICLES_CATEGORY_SUCCESS, data));
  } catch (err) {
    dispatch(err);
  }
};
