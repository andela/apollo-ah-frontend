import { createSelector } from 'reselect';

/**
 * Selectors used for fetching articles to display on the dashboard
 * @param {object} state A reference to the state in the redux store
 */
export const dashboardSelector = state => state.dashboard;

/**
 * Selectors created by the reselect library for memoized functions
 */
export const getDashboard = createSelector(dashboardSelector, data => data);
export const getDashboardSummary = createSelector(dashboardSelector, (data) => {
  const { articles } = data;
  const summary = {
    articles: articles.length,
    comments: 0,
    claps: 0,
  };

  articles.forEach((article) => {
    summary.comments += article.comments;
    summary.claps += article.claps;
  });
  return summary;
});
