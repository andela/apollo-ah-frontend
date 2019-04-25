import jwt from 'jsonwebtoken';
import decodeToken from '../../utils/decodeToken';

jest.mock('jsonwebtoken');

const profile = {
  'Profile.firstname': 'john',
  'Profile.lastname': 'doe',
  'Profile.bio': 'i am me',
  'Profile.createdAt': 'July 4th, 2019',
  'Profile.id': 4,
  'Profile.image': 'http://image.jpg',
  'Profile.username': 'johny',
  isConfirmed: false,
  email: 'john@doe.com'
};

describe('decodeToken function', () => {
  it('should return an object', () => {
    jwt.decode.mockImplementation(() => profile);

    const result = decodeToken('token');

    expect(result).toEqual({
      firstname: 'john',
      lastname: 'doe',
      bio: 'i am me',
      dateRegistered: 'July 4th, 2019',
      id: 4,
      image: 'http://image.jpg',
      username: 'johny',
      isConfirmed: false,
      email: 'john@doe.com'
    });
  });
});
