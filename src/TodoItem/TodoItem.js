import React from "react";
import "./TodoItem.css";

class TodoItem extends React.Component {
	render () {
		return (
			<div className="todo-item">
				<input type="checkbox" />
				<p>Placeholder text here</p>
			</div>
		)
	};
};

export default TodoItem;
