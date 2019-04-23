const initialState = {
  user: {
    token: '',
    id: '',
    isLoggedIn: false,
    profile: {
      username: '',
      firstname: '',
      lastname: '',
      bio: '',
      email: '',
      image: '',
      loading: false,
      errorData: [],
    },
    resetPassword: {
      loading: false,
      message: '',
    }
  },
  article: {},
};

export default initialState;
