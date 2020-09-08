import React from 'react';
import Item from './index';
import { shallow, mount } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

let props = {
  deleteItem: jest.fn(),
  toggleItem: jest.fn(),
  updateItem: jest.fn(),
  isCompleted: false,
  text: '12345',
}

let wrapper;

beforeEach(() => {
  localStorage.clear();
  wrapper = shallow(<Item {...props} />);
});

it('should call handlers', () => {
  wrapper.find('input').simulate('change', { target: { value: '123' } });
  expect(props.updateItem).toHaveBeenCalledTimes(1);
  expect(wrapper.find('input').prop('value')).toBe('12345');

  wrapper.find('button').at(0).simulate('click');
  expect(props.toggleItem).toHaveBeenCalledTimes(1);

  wrapper.find('button').at(1).simulate('click');
  expect(props.deleteItem).toHaveBeenCalledTimes(1);
});

it('checking classnames toggle', () => {
  expect(wrapper.find('input').hasClass('todoItemCompleted')).toEqual(false);

  wrapper = shallow(<Item {...props} isCompleted={true} />);
  expect(wrapper.find('input').hasClass('todoItemCompleted')).toEqual(true);
});
