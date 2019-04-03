import { ADD_DATA } from '../contants/actionTypes';

/**
 * Dummy action
 *
 * @export
 * @param {object} payload - Data payload
 * @returns {object}
 */
export default function addData(payload) {
  return { type: ADD_DATA, payload };
}
