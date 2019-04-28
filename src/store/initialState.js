const initialState = {
  loading: false,
  errors: null,
  success: false,
  token: null,
  articles: [],
  user: {
    token: '',
    id: null,
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
    commentPage: {}
  },
  follow: {
    followers: [],
    following: [],
    isLoading: false,
    followStatus: ''
  }
};

export default initialState;
