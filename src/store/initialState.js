
const initialState = {
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
  },
};

export default initialState;
