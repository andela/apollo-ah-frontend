import { GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from './actionTypes';
import http from '../services/http';

export const ActionResponse = (actionTypes, articles) => ({
  type: actionTypes,
  payload: articles
});

export const getArticles = () => async(dispatch) => {
  try {
    const response = await http.get('/articles?size=12');
    const { data: { data } } = response;
    if (response.status === 404) {
      dispatch(ActionResponse(GET_ARTICLES_FAILURE, 'Article not found'));
    }
    dispatch(ActionResponse(GET_ARTICLES_SUCCESS, data));
  } catch (err) {
    dispatch(err);
  }
};
