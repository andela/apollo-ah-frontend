import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateArticleContainer from '../../components/CreateArticles';

configure({ adapter: new Adapter() });

describe('<CreateArticleContainer />', () => {
  it('should render <CreateArticleContainer /> component given the props', () => {
    const container = shallow(<CreateArticleContainer />);
    expect(container).toMatchSnapshot();
  });
});
