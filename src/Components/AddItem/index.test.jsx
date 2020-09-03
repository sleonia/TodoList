import React from 'react';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddItem from './index';
import { addItem } from '../../Actions'
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('Test addItem()', () => {
	const wrapper = shallow(<AddItem addItem={addItem} />);
	wrapper.find('form').simulate('sumbit', { preventDefault () {} });
});