import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: this.props.item || {}
		};
	};

	changeStatus = () => {
		this.setState(state => {
			state.item.isCompleted = !state.item.isCompleted;
			return state;
		})
	}

	render (props) {
		return (
			<div className="todo-item" id={this.props.item.id}>
				<input
					type="checkbox"
					onClick={this.changeStatus}
				/>
				<input type="text"
					className={
						this.state.item.isCompleted
							? "todo-item-completed"
							: "todo-item-noncompleted"
						}
					//onChange={this.saveItem}
					defaultValue={this.state.item.text}>
				</input>
				<button
					className="deleteItem"
					onClick={this.props.deleteItem}>
					<p>x</p>
				</button>
			</div>
		)
	};
};

export default TodoItem;
