import { ADD_DATA } from '../constants/action-types';

/**
 * Dummy action
 *
 * @export
 * @param {object} payload - Data payload
 * @returns {object}
 */
export function addData(payload) {
  return { type: ADD_DATA, payload };
}
