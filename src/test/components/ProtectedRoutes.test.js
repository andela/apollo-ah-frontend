import React from 'react';
import setup from '../setup';
import ProtectedRoutes from '../../routes/ProtectedRoutes';

const container = <ProtectedRoutes activePage="PROFILE" />;

describe('<ProtectedRoutes>', () => {
  it('should render without crashing', () => {
    const wrapper = setup(container);
    expect(wrapper).toMatchSnapshot();
  });
});
