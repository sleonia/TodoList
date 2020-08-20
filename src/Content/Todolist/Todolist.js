import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(JSON.stringify(require("./content.json")))
		};
	}

	addItem = (listId) => {
		this.setState(previousState => {
			previousState.data.lists[listId].items.push({
				"id": previousState.data.lists[listId].items.length,
				"text": "",
				"completed": "false"
			})
			return this.state.data;
		})
	}

	deleteItem = (listId, itemId) => {
		console.log(1);
		this.setState(previousState => {
			delete previousState.data.lists[listId].items[itemId];
			return this.state.data;
		})
	}

	saveItemText = (text, listId, itemId) => {///////////////doesnt work
		this.setState(previousState => {
			previousState.data.lists[listId].items[itemId] = text;
			return this.state.data;
		})
	}

	render (props) {
		return (
			<div>
				{this.state.data.lists.map((obj) => (
					<div className="todo-list">
						<p className="title">{obj.title}</p>
						{obj.items.map((item) => {
							return <TodoItem
										deleteItem={() => this.deleteItem(obj.id, item.id)}
										//saveItemText={() => this.saveItemText(item.text, obj.id, item.id)}
										item={item}
									/>
						})}
						<button onClick={() => this.addItem(obj.id)}>New item</button>
					</div>))}
			</div>);
	}
};

export default TodoList;
