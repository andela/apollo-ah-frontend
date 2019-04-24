const initialState = {
  loading: false,
  error: null,
  success: false,
  user: {
    token: '',
    id: 5,
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
  }
};

export default initialState;
