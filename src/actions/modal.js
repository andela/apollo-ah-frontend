import actionTypeGenerator from './typeGenerator';

export const resetModal = actionTypeGenerator('RESET_MODAL');


/**
 * Action generator that is dispatched when modal is closed
 * @param {boolean} closeModal The current status of the operation
 * @returns {object} The action to dispatch
 */
export const modalReset = () => ({
  type: resetModal.success,
});
/**
 * reset modal action creator
 *
 * @export
 * @returns {object}
 */

const modalAction = () => {
  return async (dispatch) => {
    dispatch(modalReset());
  };
};

export default modalAction;
