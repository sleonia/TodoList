import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/index';
import App from './Components/App';
import './index.css';

const localStorageMiddleware = ({ getState }) => next => action => {
  const res = next(action);
  console.log(getState());
  if ([action.type].includes(res.type)) {
    localStorage.setItem('data', JSON.stringify(getState().todos));
  }
  return res;
};

const store = createStore(rootReducer, applyMiddleware(localStorageMiddleware));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
