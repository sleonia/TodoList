import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AddItem from '../Containers/AddItem';
import VisibleTodoList from '../Containers/VisibleTodoList';

const App = () => (
  <>
    <Header />
    <AddItem />
    <VisibleTodoList />
    <Footer />
  </>
);

export default App;
