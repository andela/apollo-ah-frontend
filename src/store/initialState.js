
const initialState = {
  loading: {
    updatingProfile: false,
    updatingProfileImage: false,
  },
  user: {
    token: '',
    id: 0,
    username: '',
    firstname: '',
    lastname: '',
    bio: '',
    email: '',
    image: '',
    isLoggedIn: false,
    errorData: [],
  }
};

export default initialState;
