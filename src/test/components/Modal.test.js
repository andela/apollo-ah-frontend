/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Modal from '../../views/Modal.js';


configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('should render <Modal/> component given the props', () => {
    const container = shallow(<Modal />);
    const overlay = container.find('.modal');
    expect(overlay).toHaveLength(1);
    const modal = overlay.find('.modal-dialog');
    expect(modal).toHaveLength(1);
    const closeButton = container.find('button');
    expect(closeButton.hasClass('close')).toBeTruthy();
    const titleDiv = container.find('h4');
    expect(titleDiv.hasClass('modal_title')).toBeTruthy();
  });
}); 
