import React from "react";
import "./App.css";
import Header from "../Header/Header";
import TodoItem from "../TodoItem/TodoItem";
import Footer from "../Footer/Footer";

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<div className="todo-list">
					<TodoItem />
					<TodoItem />
					<TodoItem />
					<TodoItem />
				</div>
				<Footer />
			</div>
		)
	};
};

export default App;
