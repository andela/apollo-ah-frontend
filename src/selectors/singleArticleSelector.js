import { createSelector } from 'reselect';

/**
 * @param {*} state - The initial state from the redux store
 */
const getArticleSlugSelector = state => state.article.slug;
const getArticleMessageSelector = state => state.article.message;
const getArticleIsLoadingSelector = state => state.article.isLoading;
const getArticleTitleSelector = state => state.article.title;
const getArticleDescriptionSelector = state => state.article.description;
const getArticleBodySelector = state => state.article.body;
const getArticleAuthorDataSelector = state => state.article.User;
const getArticleTaglistSelector = state => state.article.tagList;
const getArticleRatingsSelector = state => state.article.ratings;
const getArticleCategorySelector = state => state.article.articleCategory;
const getArticleImageSelector = state => state.article.image;
const getArticleReadTimeSelector = state => state.article.readTime;
const getArticleCreatedAtSelector = state => state.article.createdAt;
const getArticleUpdatedAtSelector = state => state.article.updatedAt;
const recommendedArticlesSelector = state => state.articlesReducer.articles;
const singleArticleIdSelector = state => state.article.id;


export const getArticleSlug = createSelector(getArticleSlugSelector, slug => slug);
export const getArticleMessage = createSelector(getArticleMessageSelector, message => message);
export const getArticleIsLoading = createSelector(
  getArticleIsLoadingSelector, isLoading => isLoading
);
export const getArticleTitle = createSelector(getArticleTitleSelector, title => title);
export const getArticleDescription = createSelector(
  getArticleDescriptionSelector, description => description
);
export const getArticleBody = createSelector(getArticleBodySelector, body => body);
export const getArticleAuthorProfile = createSelector(
  getArticleAuthorDataSelector, profile => profile
);
export const getArticleTagList = createSelector(getArticleTaglistSelector, tagList => tagList);
export const getArticleRatings = createSelector(getArticleRatingsSelector, ratings => ratings);
export const getArticleCategory = createSelector(getArticleCategorySelector, category => category);
export const getArticleImage = createSelector(getArticleImageSelector, image => image);
export const getArticleReadTime = createSelector(getArticleReadTimeSelector, readTime => readTime);
export const getArticleCreatedTime = createSelector(getArticleCreatedAtSelector, time => time);
export const getArticleUpdatedTime = createSelector(getArticleUpdatedAtSelector, time => time);
export const getRecommendedArticles = createSelector(
  recommendedArticlesSelector, articles => articles
);
export const getArticleId = createSelector(singleArticleIdSelector, id => id);
