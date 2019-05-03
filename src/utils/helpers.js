import jwt from 'jsonwebtoken';
import simpleDateFormat from 'date-fns/format';
import compareDateFormat from 'date-fns/distance_in_words_strict';
/**
 * Extract a given url query value
 *
 * @param {string} param - The query string to search
 * @returns {string} The query value
 */
export const getUrlQuery = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

/**
 * Verifies and decodes JWT token
 *
 * @param {string} token - The token string
 * @returns {object} The decoded payload
 */
export const verifyToken = token => jwt.verify(token, process.env.APP_KEY);

export const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  swipeToSlide: true,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: 15,
      }
    },
  ]
};
/**
   * Formats the date to a human readable format
   * @param {object} date The date object to format
   * @returns {object} An object  containing a short and long format representations of the date
   */
export const getDisplayDate = (date) => {
  const today = new Date();
  const result = {
    short: simpleDateFormat(date, 'MMM Do, YYYY'),
    long: simpleDateFormat(date, 'MMM Do, YYYY h:mm a')
  };
  if (simpleDateFormat(date, 'M YYYY') === simpleDateFormat(today, 'M YYYY')) {
    const difference = compareDateFormat(date, today);
    result.short = difference.startsWith('0') ? '1 second ago' : `${difference} ago`;
  }
  return result;
};

export default {};
