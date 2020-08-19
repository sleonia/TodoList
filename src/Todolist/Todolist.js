import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import List from "./TodoItem/List";
import Item from "./TodoItem/Item";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.json = JSON.parse(JSON.stringify(require("./content.json")));
	}
	
	render (props) {
		return (
			<div>
				{this.json.lists.map((obj) => (
					<div className="todo-list">
					<p className="title">{obj.title}</p>
					{obj.items.map((item, key) => {
						return <TodoItem item={item} />
					})}
				</div>))}
			</div>);
	}
};

export default TodoList;
