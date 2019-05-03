import { createSelector } from 'reselect';

/**
 * Selectors for retreiving common events/states
 * @param {object} state A reference to the state in the redux store
 */
export const toast = state => state.toast;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getToast = createSelector(toast, message => message);
