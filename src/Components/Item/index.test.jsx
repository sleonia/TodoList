import React from 'react';
import Item from './index';
import { shallow } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const prop = {
  deleteItem: jest.fn(),
  toggleItem: jest.fn(),
  updateItem: jest.fn(),
  isCompleted: false,
  text: '12345',
}

describe('Testing Item', () => {
  beforeEach(() => {
    localStorage.clear();
  });


	it('should call updateItem', () => {
    const wrapper = shallow(<Item {...prop} />);
    wrapper.find('input').simulate('change', {'target':{'value': '123'}});
  })

	it('should call toggleItem', () => {
    const wrapper = shallow(<Item {...prop} />);
    wrapper.find('button').at(0).simulate('click');
  })

	it('should call deleteItem', () => {
    const wrapper = shallow(<Item {...prop} />);
    wrapper.find('button').at(1).simulate('click');
  })

  describe('checking classnames condition: true', () => {
    const wrapper = shallow(<Item {...prop} />);
    expect(wrapper.find('input').hasClass('todoItemCompleted')).toEqual(false);
  })

  describe('checking classnames condition: false', () => {
    const wrapper = shallow(<Item {...prop} isCompleted={true} />);
    expect(wrapper.find('input').hasClass('todoItemCompleted')).toEqual(true);
  });
})
