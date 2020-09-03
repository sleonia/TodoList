import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../Reducers/index';

import Header from './Header';
import Footer from './Footer';
import AddItem from '../Containers/AddItem';
import VisibleTodoList from '../Containers/VisibleTodoList';

const localStorageMiddleware = ({ getState }) => next => action => {
  const res = next(action);
  if ([action.type].includes(res.type)) {
    localStorage.setItem('data', JSON.stringify(getState().todos));
  }
  return res;
};

const store = createStore(rootReducer, applyMiddleware(localStorageMiddleware));

const App = () => (
  <>
    <Provider store={store}>
      <Header />
      <AddItem />
      <VisibleTodoList />
      <Footer />
    </Provider>
  </>
);

export default App;
