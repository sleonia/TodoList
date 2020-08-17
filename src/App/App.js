import React from 'react';
import Header from '../Header/Header';
import TodoItem from '../TodoItem/TodoItem';
import Footer from '../Footer/Footer';

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<TodoItem />
				<Footer />
			</div>
		)
	};
};

export default App;
