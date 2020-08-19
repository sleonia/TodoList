import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	constructor(props) {
		super(props);
		this.completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		}
	};

	render (props) {
		return (
			<div className="todo-item">
				<input
					type="checkbox"
				/>
				<p>{this.props.item.text}</p>
				{/*<p style={this.props.item.completed === true ? null : this.completedStyle}>{this.props.item.text}</p>*/}
			</div>
		)
	};
};

export default TodoItem;
