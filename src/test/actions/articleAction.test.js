import * as actions from '../../actions/articleAction';

describe('articleAction test suite', () => {
  it('sets loading of the state', () => {
    const expected = {
      type: actions.getArticlesType.loading,
    };
    expect({
      type: actions.getArticlesType.loading,
    }).toEqual(expected);
  });
  it('should create an action when successful', () => {
    const expected = {
      type: actions.getArticlesType.success,
      articles: [{}],
      page: 1,
    };
    expect(actions.getArticlesSuccess([{}], 1)).toEqual(expected);
  });
});
