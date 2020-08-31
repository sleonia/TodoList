import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import App from './Components/App';
import './index.css';
// import logger from './Actions/Logger';

const logger = ({ getState }) => next => action => {
  const result = next(action);  
  console.log(1)
    return result;
};

const store = createStore(rootReducer, {}, 
  window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
