import { NEW_TOAST, CLEAR_TOAST } from './actionTypes';

/**
 * Action creator that is dispatched when new toast is created
 *
 * @param {string} message - The toast message
 * @returns {object} - Returns an action object
 */
const newToaster = message => ({
  type: NEW_TOAST,
  payload: message
});

/**
 * Toast action for creating new toast
 *
 * @export
 * @param {string} message - The toast message
 * @returns {object} - Returns an actions object
 */
const newToast = message => async (dispatch) => {
  dispatch(newToaster(message));
};

/**
 * Toast action for clearing the toast
 *
 * @export
 * @returns {object} - Returns an actions object
 */
export const clearToast = () => async (dispatch) => {
  dispatch({ type: CLEAR_TOAST });
};

export default newToast;
