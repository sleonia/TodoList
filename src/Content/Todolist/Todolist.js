import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			obj: props.obj
		};
	}

	addItem = (listId) => {
		this.setState(previousState => {
			previousState.obj.items.push({
				"id": previousState.obj.items.length,
				"text": "",
				"completed": "false"
			})
			return this.state.obj;
		})
	}

	deleteItem = (listId, itemId) => {
		this.setState(previousState => {
			delete previousState.obj.items[itemId];
			return this.state.obj;
		})
	}

	render (props) {
		return (
			<div className="todo-list">
				<input
					type="text"
					className="title"
					defaultValue={this.props.obj.title}>
				</input>
				{this.props.obj.items.map((item) => {
					return <TodoItem
								deleteItem={() => this.deleteItem(this.props.obj.id, item.id)}
								item={item}
							/>
				})}
				<button
					className="new-item"
					onClick={() => this.addItem(this.props.obj.id)}>
					New item
				</button>
			</div>);
	}
};

export default TodoList;
