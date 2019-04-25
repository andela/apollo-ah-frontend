import actionTypeGenerator from './typeGenerator';

export const resetArticleMessage = actionTypeGenerator('RESET_ARTICLE_MESSAGE');


/**
 * Action generator that is dispatched when modal is closed
 * @param {boolean} closeModal The current status of the operation
 * @returns {object} The action to dispatch
 */
export const messageReset = () => ({
  type: resetArticleMessage,
});
/**
 * reset modal action creator
 *
 * @export
 * @returns {object}
 */

const resetMessageAction = () => async (dispatch) => {
  dispatch(messageReset());
};

export default resetMessageAction;
