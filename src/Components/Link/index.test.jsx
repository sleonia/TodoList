import React from 'react';
import Link from './index';
import { shallow } from 'enzyme';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

const prop = {
	isActive: true,
  children: "1234",
  handleClick: jest.fn(),
}

describe('Testing Link', () => {
  beforeEach(() => {
    localStorage.clear();
  });


	it('should call handleClick', () => {
    const wrapper = shallow(<Link {...prop} />);
    wrapper.find('button').simulate('click');
  })

	it('checking isActive: true', () => {
    const wrapper = shallow(<Link {...prop} isActive={true} />);
		expect(wrapper.find('button').props().disabled).toBe(true);
  })

	it('checking isActive: false', () => {
    const wrapper = shallow(<Link {...prop} isActive={false} />);
		expect(wrapper.find('button').props().disabled).toBe(false);
  })

	it('checking children', () => {
    const wrapper = shallow(<Link {...prop} children={'123456'} />);
		expect(wrapper.find('button').props().children).toBe('123456');
  })
})
