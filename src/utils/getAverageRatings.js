let sum = 0;
let average = 0;
let authorAndAverageRatings;
const tempRatings = [];
export let totalRatings = [];

export const getAverageRatings = (article) => {
  article.ratings.map(rating => {
    sum = sum + rating.stars;
    average = sum / article.ratings.length;
    sum = 0;
    authorAndAverageRatings = {
      articleId: article.id,
      articleTitle: article.title,
      averageRatings: average,
      authorsProfile: article.User.Profile,
      authorsId: article.User.id,
    };
    tempRatings.push(authorAndAverageRatings);
    totalRatings = totalRatings.concat(tempRatings);
  });
};
