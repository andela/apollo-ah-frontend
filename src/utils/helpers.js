import jwt from 'jsonwebtoken';

/**
 * Extract a given url query value
 *
 * @param {string} param - The query string to search
 */
export const getUrlQuery = param => {
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

export default {};
