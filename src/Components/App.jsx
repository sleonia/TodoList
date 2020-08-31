import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddItem from '../Containers/AddItem';
import VisibleTodoList from '../Containers/VisibleTodoList';

const App = () => (
  <div>
    <Header />
    <AddItem />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
