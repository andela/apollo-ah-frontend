import {
  MODAL_RESET,
} from './actionTypes';

/**
 * reset modal action creator
 *
 * @export
 * @returns {object}
 */

const modalAction = () => {
  return async (dispatch) => {
    dispatch({
      type: MODAL_RESET,
      responseData: false,
    });
  };
};

export default modalAction;
