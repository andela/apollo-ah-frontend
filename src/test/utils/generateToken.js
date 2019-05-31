import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Generates JWT token using provided payload
 *
 * @param {Object} payload - Payload to encrypt
 * @param {string} expiresIn Validity perion of the token
 * @return {string} JWT token string
 */
const generateToken = async payload => jwt.sign(payload, process.env.APP_KEY);

export default generateToken;
