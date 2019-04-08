import typeGenerator from './actionTypeGenerator';
import axios from 'axios';

/**
 * @description - articles categories response function
 * @param {string} actionType - type of action
 * @param {object} category - article category
 * @returns {object}
 */
// export const categoryActionResponse = (actionType, category) => ({
//   type: actionType,
//   payload: category
// });

export const articleCategoryAction = (type, payload) => ({
  type: typeGenerator(type),
  payload
});


/**
 * @description Request to the API to get only 6 articles categories
 * @returns {object} dispatch object
 */
export const getArticlesCategory = () => async(dispatch) => {
  try {
    articleCategoryAction('LOADING', 'started');
    const response = await axios.get(`${process.env.API_BASE_URL}/categories?size=6`);
    const { data: { data } } = response;
    if (response.status === 404) {
      dispatch(articleCategoryAction('GET_ARTICLES_CATEGORY_FAILURE', 'Category not found'));
      articleCategoryAction('STOP_LOADING', 'stopped');
    }
    dispatch(articleCategoryAction('GET_ARTICLES_CATEGORY_SUCCESS', data));
    articleCategoryAction('STOP_LOADING', 'stopped');
  } catch (err) {
    articleCategoryAction('STOP_LOADING', 'stopped');
    dispatch(articleCategoryAction('SEVER_ERROR', err));
  }
};
