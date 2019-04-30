const success = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhYmNkZWZAeHl6LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJExyaVpzLkxLcy9XWDM2NHI1Um0vTk9xdldqZERSamZZcjY5TXlab2tCZEttUGdwOXZBR3hDIiwiaXNDb25maXJtZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDE5LTA0LTAzVDE3OjU5OjI5LjE2MFoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA0LTAzVDE3OjU5OjI5LjE2MFoiLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTU1NDU5MDYxN30.MOIdjyXrvrpCs4xpgIg3DvEHihL_HmrzJ0nn6GEo5KU',
  isLoggedIn: true,
  status: 'success',
  message: 'Your login was successful',
  isLoading: false
};

const loading = {
  isLoading: true,
  isLoggedIn: false,
  token: undefined,
  status: undefined,
  message: undefined
};

const data = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJhYmNkZWZAeHl6LmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJExyaVpzLkxLcy9XWDM2NHI1Um0vTk9xdldqZERSamZZcjY5TXlab2tCZEttUGdwOXZBR3hDIiwiaXNDb25maXJtZWQiOmZhbHNlLCJjcmVhdGVkQXQiOiIyMDE5LTA0LTAzVDE3OjU5OjI5LjE2MFoiLCJ1cGRhdGVkQXQiOiIyMDE5LTA0LTAzVDE3OjU5OjI5LjE2MFoiLCJkZWxldGVkQXQiOm51bGwsImlhdCI6MTU1NDU5MDYxN30.MOIdjyXrvrpCs4xpgIg3DvEHihL_HmrzJ0nn6GEo5KU',
};

const profile = {
  username: '',
  firstname: '',
  lastname: '',
  bio: '',
  email: '',
  image: '',
  loading: false,
  errorData: [],
};

const failure = {
  data: {
    code: 401,
    data: [],
    message: 'Email or password is incorrect',
    status: false,
  }
};

const user = {
  email: 'abcdef@xyz.com',
  password: '123456789o'
};

const bookmarkSuccess = {
  code: 201,
  data: {
    id: 31,
    userId: 12,
    articleId: 23,
    updatedAt: '2019-04-19T17:01:10.866Z',
    createdAt: '2019-04-19T17:01:10.866Z'
  },
  message: 'successfully bookmarked this article',
  status: true
};

export default {
  success,
  failure,
  user,
  loading,
  profile,
  data,
  bookmarkSuccess,
};
