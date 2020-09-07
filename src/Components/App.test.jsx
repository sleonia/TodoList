import React from 'react';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import App from './App';

configure({ adapter: new Adapter() })

it("Render App component", function () {
  const AppComponent = renderer.create(
    <App />
  );
  expect(AppComponent).toMatchSnapshot();
});
