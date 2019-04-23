import reportArticleType from '../actions/reportArticleAction';
import initialState from '../store/initialState';

export default reportArticleReducer = (state= initialState, action= {}) => {
  switch (action.type) {
    case reportArticleType.loading:
      return { }
  }
};
