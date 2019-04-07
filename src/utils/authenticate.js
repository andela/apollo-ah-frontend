import store from '../store';

const isLoggedIn = () => {
  const { user } = store.getState();
  return user.isLoggedIn;
};

export default isLoggedIn;
