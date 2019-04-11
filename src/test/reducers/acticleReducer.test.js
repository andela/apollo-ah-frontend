import articleReducer from '../../reducers/articleReducer';

describe('articleReducer test suite', () => {
  it('should return articles', () => {
    const initialState = {
      articles: [],
      page: {
        "first": 1,
        "current": 1,
        "last": 1,
        "currentCount": 0,
        "totalCount": 0,
        "description": ""
      },
      loading: ''
    };
    const state = articleReducer(initialState, {
      type: 'GET_ARTICLES_SUCCESS',
      payload: {
        articles: [{
          id: 1,
          image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          title: 'New article title',
          articleCategory: {
            category: 'Technology',
          },
          description: 'This is the article description',
          User: {id: 8, Profile:{firstname: 'Andra', lastname: 'Collins', username: '@Andra'}},
        }],
      }
    });
   expect(state).toEqual({
     articles: [{
      id: 1,
      image: 'https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      title: 'New article title',
      articleCategory: {
        category: 'Technology',
      },
      description: 'This is the article description',
      User: {id: 8, Profile:{firstname: 'Andra', lastname: 'Collins', username: '@Andra'}},
    }],
    "loading": "",
    "page": undefined,
   });
  });

  it('return default state', () => {
    const initialState = {
      articles: [],
    };
   const state = articleReducer(initialState, {
     type: '',
     payload: [],
   });
   expect(state).toEqual({
     articles: [],
   });
  });

  it('return initial state', () => {
   expect(articleReducer(undefined, {})).toEqual({
     articles: [],
     "error": "",
     page: {
      "first": 1,
      "current": 1,
      "last": 1,
      "currentCount": 0,
      "totalCount": 0,
      "description": ""
    },
    loading: ''
   });
  });
});