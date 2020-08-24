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
			this.props.item.isCompleted = !this.props.item.isCompleted;
			this.props.toLocalStorage();
			return state;
		})
	}

	saveItem = (e) => {
		e.persist();
		this.setState(state => {
			this.props.item.text = e.target.value;
			this.props.toLocalStorage();
			return state;
		})
	}

	render (props) {
		return (
			<div className="todo-item" id={this.state.item.id}>
				<input
					type="checkbox"
					onClick={this.changeStatus}
				/>
				<input type="text"
					className={
						this.props.item.isCompleted
							? "todo-item-completed"
							: "todo-item-noncompleted"
						}
					onChange={this.saveItem}
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