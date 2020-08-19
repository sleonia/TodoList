import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { isCompleted: false };
		this.completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through",
			border: 0
		}
	};

	handleClick = () => {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render (props) {
		return (
			<div className="todo-item">
				<form >
					<label>
						<input type="checkbox" onClick={this.handleClick} />
						<input type="text" style={this.state.isCompleted === true ? this.completedStyle : null} defaultValue={this.props.item.text}></input>
					</label>
				</form>
			</div>
		)
	};
};

export default TodoItem;
