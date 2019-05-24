import typeGenerator from './typeGenerator';

export const logoutType = typeGenerator('LOG_OUT');

export const logoutSuccess = () => ({
  type: logoutType.success,
});

export const logoutUser = () => (dispatch) => {
  dispatch(logoutSuccess());
};
