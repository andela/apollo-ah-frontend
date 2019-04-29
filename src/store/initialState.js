const initialState = {
  loading: false,
  errors: null,
  success: false,
  token: null,
  articles: [],
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
};

export default initialState;
