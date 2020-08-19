import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isCompleted: false };
		this.completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		}
	};

	changeState = () => { //rename?
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render (props) {
		return (
			<div className="todo-item">
				<input
					type="checkbox"
					onClick={this.changeState.bind(this)}
				/>
				<p style={this.state.isCompleted === true ? this.completedStyle : null}>{this.props.item.text}</p>
			</div>
		)
	};
};

export default TodoItem;
