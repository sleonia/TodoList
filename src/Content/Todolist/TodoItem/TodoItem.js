import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		//this.state = { isCompleted: true };
		this.state = { isCompleted: false };
	};

	changeStatus = () => {
		//changeStatus() {
			console.log(1);
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render (props) {
		return (
			<div className="todo-item">
			{/*<div className={this.state.isCompleted ? "todo-item-completed" : "todo-item"}>*/}
				<input type="checkbox" onClick={this.changeStatus} />
				{/*<input type="checkbox" onClick={() => this.changeStatus} />*/}
				<input type="text"
					//onChange={this.props.saveItemText}
					//onChange={this.onfocusout(this.props.saveItemText)}
					className={this.state.isCompleted ? "todo-item-completed" : "todo-item-noncompleted"}
					defaultValue={this.props.item.text}>
				</input>
				<button onClick={this.props.deleteItem}>x</button>
			</div>
		)
	};
};

export default TodoItem;
