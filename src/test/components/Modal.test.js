/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../../views/Modal';


configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('should render <Modal/> component given the props', () => {
    const container = shallow(<Modal />);
    expect(container).toMatchSnapshot();
  });
}); 
