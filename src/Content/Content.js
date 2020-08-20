import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(JSON.stringify(require("./content.json")))
		};
	}

	addList = () => {
		this.setState(previousState => {
			previousState.data.lists.push({
				"id": previousState.data.lists.length,
				"title": "New List",
				"items": [{
					"id": 0,
					"text": "",
					"completed": "false"
				}]
			})
			return this.state;
		})
	}

	deleteList = (listId) => {
		this.setState(previousState => {
			delete previousState.data.lists[listId];
			return this.state;
		})
	}

	render () {
		return (
			<div>
				{this.state.data.lists.map((obj) => (
					<TodoList obj={obj} deleteList={() => this.deleteList(obj.id)} />
				))}
				<button onClick={() => this.addList()}>New list</button>
			</div>
		)
	};
};

export default Content;
