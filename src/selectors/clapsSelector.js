import { createSelector } from 'reselect';

export const clapsSelector = state => state.userClaps.claps;

export const getUserClaps = createSelector(clapsSelector, claps => claps);
