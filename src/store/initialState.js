const initialState = {
  user: {
    token: '',
    loading: false,
    errors: null,
    success: false,
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
    id: '',
    title: '',
    slug: '',
    body: '',
    image: '',
    description: '',
    createdAt: '',
    updatedAt: '',
    deletedAt: '',
    auhtorId: '',
    categoryId: '',
    isLoading: false,
    message: '',
    User: {},
    tagList: [],
    articleCategory: {},
    ratings: [],
    readTime: '',
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
  },
  dashboard: {
    articles: [],
    loading: false,
    message: ''
  },
  bookmarkedList: {
    bookmarked: [],
    isLoading: false,
    message: '',
  },
  userClaps: { claps: 0 }
};

export default initialState;
