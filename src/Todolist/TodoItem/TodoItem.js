import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	render (props) {
		return (
			<div className="todo-item">
				<input type="checkbox" />
				<p>{this.props.text}</p>
			</div>
		)
	};
};

export default TodoItem;
