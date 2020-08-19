import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.json = JSON.parse(JSON.stringify(require("./content.json")));
		this.state = { isCompleted: false };

		this.completedStyle = {
			fontStyle: "italic",
			color: "#cdcdcd",
			textDecoration: "line-through"
		}
	}


	handler = () => {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}
	
	render (props) {
		return (
			<div>
				{this.json.lists.map((obj) => (
					<div className="todo-list">
						<p style={this.state.isCompleted ? this.completedStyle : null} className="title" onClick={this.handler.bind(this)}>{obj.title}</p>	
						{obj.items.map((item, key) => {
							return <TodoItem item={item} />
						})}
					</div>))}
			</div>);
	}
};

export default TodoList;
