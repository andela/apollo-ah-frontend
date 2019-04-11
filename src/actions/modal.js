import actionCreator from './actionGenerator';

export const resetModal = actionCreator('RESET_MODAL');


/**
 * Action generator that is dispatched when modal is closed
 * @param {boolean} status The current status of the operation
 * @returns {object} The action to dispatch
 */
export const modalReset = closeModal => ({
  type: resetModal.success,
  closeModal
});
/**
 * reset modal action creator
 *
 * @export
 * @returns {object}
 */

const modalAction = () => {
  return async (dispatch) => {
    dispatch(modalReset(false));
  };
};

export default modalAction;
