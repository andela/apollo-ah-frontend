import articleCategoryReducer from '../../reducers/articleCategoryReducer';

describe('articleCategoryReducer test suite', () => {
  it('return article Categories', () => {
    const initialState = {
      category: [],
    };
   const state = articleCategoryReducer(initialState, {
     type: 'GET_ARTICLES_CATEGORY_SUCCESS',
     payload: [{id: 1, category: 'Technology'},{id: 2, category: 'Sports'}],
   });
   expect(state).toEqual({
     category: [{id: 1, category: 'Technology'}, {id: 2, category: 'Sports'}],
   });
  });

  it('return default state', () => {
    const initialState = {
      category: [],
    };
   const state = articleCategoryReducer(initialState, {
     type: '',
     payload: [],
   });
   expect(state).toEqual({
     category: [],
   });
  });
  it('return initial state', () => {
    expect(articleCategoryReducer(undefined, {})).toEqual({
      category: [],
      "loading": "",
    });
   });
});
