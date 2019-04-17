import dateFn from 'date-fns';

/**
 * @description time an article was created
 * @param {object} article - each authors article
 * @return {array} fiveStaAauhtors - author's rated highly
 */
const time = article => dateFn.distanceInWords(new Date(article.createdAt), new Date());

export default time;
