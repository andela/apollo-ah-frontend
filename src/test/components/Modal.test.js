import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jest from 'jest';
import Modal from '../../views/Modal.js';


configure({ adapter: new Adapter() });

describe('<Modal>', () => {
  it('renders Modal component given the props', () => {
    const container = shallow(<Modal />);
    const overlay = container.find('.modal');
    expect(overlay).toHaveLength(1);
    const modal = overlay.find('.modal-dialog');
    expect(modal).toHaveLength(1);
  });
});