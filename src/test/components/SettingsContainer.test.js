import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import SettingsContainer from '../../components/SettingsContainer';

configure({ adapter: new Adapter() });


describe('<SettingsContainer>', () => {
  it('should render', () => {
    const wrapper = shallow(<SettingsContainer />);
    expect(wrapper).toBeDefined();
  });
});
