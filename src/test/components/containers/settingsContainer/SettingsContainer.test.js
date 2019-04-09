import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SettingsContainer from '../../../../components/containers/SettingsContainer';

configure({ adapter: new Adapter() });

describe('<SettingsContainer>', () => {
  it('should render', () => {
    const wrapper = shallow(<SettingsContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
