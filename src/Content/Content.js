import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor() {
		super();
		this.state = {
			data: JSON.parse(JSON.stringify(require("./content.json")))
		};
	}

	newList() {
	}

	render () {
		return (
			<div>
				{this.state.data.lists.map((obj) => (
					<TodoList obj={obj} />
				))}
				<button onClick={() => this.newList()}>New list</button>
			</div>
		)
	};
};

export default Content;
