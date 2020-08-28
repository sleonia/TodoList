import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
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
