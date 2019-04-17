import '@babel/polyfill';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import DashboardContainer from '../../components/DashboardContainer';

configure({ adapter: new Adapter() });

describe('<DashboardContainer>', () => {
  it('should render', () => {
    const wrapper = shallow(<DashboardContainer />);
    expect(wrapper).toBeDefined();
  });
});
