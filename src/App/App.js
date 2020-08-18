import React from "react";
import "./App.css";
import Header from "../Header/Header";
import TodoList from "../Todolist/Todolist";
import Footer from "../Footer/Footer";

class App extends React.Component {
	render () {
		return (
			<div>
				<Header />
				<TodoList title="Title" />
				<Footer />
			</div>
		)
	};
};

export default App;
