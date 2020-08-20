import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor() {
		super();
	}

	newList() {
	}

	render () {
		return (
			<div>
				<TodoList />
				<button onClick={() => this.newList()}>New list</button>
			</div>
		)
	};
};

export default Content;
