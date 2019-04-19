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
  },
  bookmarkedList: {
    bookmarked: [],
    isLoading: false
  },
};

export default initialState;
