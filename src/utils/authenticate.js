import store from '../store';

/**
 * Checks if the user is logged in
 * @returns {boolean} The state of the loggedIn value in the redux store
 */
const isLoggedIn = () => {
  const { user } = store.getState();
  return user.isLoggedIn;
};

export default isLoggedIn;
