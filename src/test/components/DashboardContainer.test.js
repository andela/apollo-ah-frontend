import React from 'react';
import DashboardContainer from '../../components/DashboardContainer';
import setup, { mockState } from '../setup/index';

describe('<DashboardContainer>', () => {
  it('should render with all components', () => {
    const wrapper = setup(<DashboardContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render with all components when loading', () => {
    mockState.dashboard.loading = true;
    const wrapper = setup(<DashboardContainer />, mockState);
    expect(wrapper).toMatchSnapshot();
  });
});
