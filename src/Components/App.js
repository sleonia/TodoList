import React from 'react'
import Header from './Header'
import Footer from './Footer'
//import AddTodo from '../containers/AddTodo'
//import VisibleTodoList from '../containers/VisibleTodoList'

class App extends React.Component {
	render() {
		return (
				<div>
					<Header />
					{/*<AddTodo />*/}
					{/*<VisibleTodoList />*/}
					<Footer />
				</div>
		)
	}
}

export default App