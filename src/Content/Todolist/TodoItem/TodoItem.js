import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCompleted: false };
	};

	changeStatus = () => {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render (props) {
		return (
			<div className="todo-item">
				<input type="checkbox" onClick={this.changeStatus} />
				<input type="text"
					className={this.state.isCompleted ? "todo-item-completed" : "todo-item-noncompleted"}
					defaultValue={this.props.item.text}>
				</input>
				<button className="delete-item" onClick={this.props.deleteItem}>x</button>
			</div>
		)
	};
};

export default TodoItem;
