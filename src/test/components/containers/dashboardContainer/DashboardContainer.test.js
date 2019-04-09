import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardContainer from '../../../../components/containers/DashboardContainer';

configure({ adapter: new Adapter() });

describe('<DashboardContainer>', () => {
  it('should render', () => {
    const wrapper = shallow(<DashboardContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
