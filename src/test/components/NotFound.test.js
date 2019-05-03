import React from 'react';
import setup from '../setup';
import ConnectedNotFound from '../../components/NotFound';

const mockFn = jest.fn();
describe('<NotFound />', () => {
  it('should render the component', () => {
    const wrapper = setup(<ConnectedNotFound getArticles={mockFn} />);
    expect(wrapper).toMatchSnapshot();
  });
});
