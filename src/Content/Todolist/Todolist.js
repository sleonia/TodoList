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

	addItem = () => {
		this.setState(previousState => {
			previousState.obj.items.push({
				"id": previousState.obj.items.length,
				"text": "",
				"completed": "false"
			})
			return this.state.obj;
		})
	}

	deleteItem = (itemId) => {
		this.setState(previousState => {
			delete previousState.obj.items[itemId];
			return this.state.obj;
		})
	}

	render (props) {
		return (
			<div className="todo-list">
				{/*<div>*/}
					<input
						type="text"
						className="title"
						defaultValue={this.props.obj.title}>
					</input>
					<button
						className="delete-list"
						onClick={() => this.props.deleteList()}>
						x
					</button>
				{/*</div>*/}
				{this.props.obj.items.map((item) => {
					return <TodoItem
								key={item.id}
								deleteItem={() => this.deleteItem(item.id)}
								item={item}
							/>
				})}
				<button
					className="new-item"
					onClick={() => this.addItem()}>
					New item
				</button>
			</div>);
	}
};

export default TodoList;
