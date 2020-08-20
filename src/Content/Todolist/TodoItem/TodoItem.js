import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCompleted: false };
		this.completedStyle = { ///////////////////////delete!!!!!!!!!!!!!
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through",
			border: 0
		}
	};

	changeStatus() {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render (props) {
		return (
			//<div className="todo-item">///////////ternary class name
			<div className={"todo-item"}>
				<input type="checkbox" onClick={() => this.changeStatus} />
				<input type="text"
					onChange={this.props.saveItemText}
					//onChange={this.onfocusout(this.props.saveItemText)}
					style={this.state.isCompleted ? this.completedStyle : null}
					defaultValue={this.props.item.text}>
				</input>
				<button onClick={() => this.props.deleteItem}>x</button>
			</div>
		)
	};
};

export default TodoItem;
