import { createSelector } from 'reselect';

const articleSlug = state => state.article.slug;
const articleAuthorId = state => state.article.authorId;
const articleClaps = state => state.article.claps;

export const getArticleAuthorId = createSelector(articleAuthorId, author => author);
export const getArticleSlug = createSelector(articleSlug, slug => slug);
export const getArticleClaps = createSelector(articleClaps, claps => claps);

export default {};
