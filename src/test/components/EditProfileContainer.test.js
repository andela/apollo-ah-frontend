import React from 'react';
import setup from '../setup';
import EditProfileContainer from '../../components/EditProfileContainer';

const container = <EditProfileContainer activePage="PROFILE" />;

describe('<EditProfileContainer>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(container);
    expect(wrapper).toMatchSnapshot();
  });
});
