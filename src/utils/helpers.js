import jwt from 'jsonwebtoken';

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
