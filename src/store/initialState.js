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
    resetPassword: {
      loading: false,
      message: '',
    }
  },
  article: {
    newComments: [],
    postingComment: false,
    gettingComments: false,
    commentMessage: '',
    oldComments: [],
    hasMoreComments: false,
  }
};

export default initialState;
