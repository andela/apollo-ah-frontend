import React from 'react';
import { shallow } from 'enzyme';
import { ClapButton } from '../../components/ClapButton';

/**
 * Wrapper for enzyme shallow component
 *
 * @returns {object} The mocked props and component
 */
function setup() {
  const props = {
    articleSlug: 'some-slug',
    articleAuthorId: 1,
    articleClaps: 0,
    clapArticle: jest.fn(),
    isLoggedIn: true,
    userId: 1,
    history: {
      push: jest.fn(),
    },
    token: '',
    userClaps: 0,
    loadUserClaps: jest.fn(),
  };

  const enzymeWrapper = shallow(<ClapButton {...props} />);
  return { props, enzymeWrapper };
}

describe('<ClapButton />', () => {
  it('renders without crashing given the required props', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper).toMatchSnapshot();
  });
});
