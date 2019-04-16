/**
 * Object containing the app's initial state
 */
const initialState = {
  loading: false,
  errors: null,
  success: false,
  token: null,
  articles: [],
  user: {
    token: undefined,
    isLoggedIn: false,
    loginStatus: undefined,
    message: undefined,
    isLoading: false,
    profile: {
      username: '',
      image: '',
    }
  },
};

export default initialState;
