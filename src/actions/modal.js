import { modalReset } from './actionCreators';

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
