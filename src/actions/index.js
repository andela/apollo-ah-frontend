import { ADD_DATA } from './actionTypes';

/**
 * Dummy action
 *
 * @export
 * @param {object} payload - Data payload
 * @return {object}
 */
export default function addData(payload) {
  return { type: ADD_DATA, payload };
}
export * from './articleAction';
export * from './articleCategoryAction';
