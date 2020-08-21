import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		let value = localStorage.getItem(props.id);
		this.state = {
			isCompleted: false,
			value: !value ? "" : value
		};
	};

	changeStatus = () => {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	handeChange = (event) => {
		this.setState({value: event.target.value});
		localStorage.setItem(this.props.id, event.target.value);
	}

	render (props) {
		return (
			<div className="todo-item" id={this.props.id} onfocusout={this.handeChange}>
				<input
					type="checkbox"
					onClick={this.changeStatus}
				/>
				<input type="text"
					className={
						this.state.isCompleted
							? "todo-item-completed"
							: "todo-item-noncompleted"
						}
					onChange={this.handeChange}
					value={this.state.value}>
				</input>
				<button
					className="deleteItem"
					onClick={this.props.deleteItem}>
					x
				</button>
			</div>
		)
	};
};

export default TodoItem;
