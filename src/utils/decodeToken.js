import jwt from 'jsonwebtoken';

const decodeToken = (token) => {
  const user = jwt.decode(token);
  return {
    firstname: user['Profile.firstname'],
    lastname: user['Profile.lastname'],
    isConfirmed: user.isConfirmed,
    bio: user['Profile.bio'],
    dateRegistered: user['Profile.createdAt'],
    id: user['Profile.id'],
    image: user['Profile.image'],
    username: user['Profile.username'],
    email: user.email,
  };
};
export default decodeToken;
