import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AddTodo from '../Containers/AddTodo'
import VisibleTodoList from '../Containers/VisibleTodoList'

const App = () => (
	<div>
		<Header /> 
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
)

export default App;