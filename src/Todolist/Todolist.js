import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import {lists} from "./content.json"
import List from "./TodoItem/List";

class TodoList extends React.Component {
	constructor() {
		super();
		this._json = lists;
		this._lists = [];
	}

	jsonLoad() {	
		this._json.forEach(obj => {
			let list = new List();
			list.title = obj.title;
			
			Object.entries(obj.items).forEach(([key, value]) => {
				list.items.push(value.text, value.status);
			});
			
			this._lists.push(list);
		});
		//console.log(lists);
	}

	render (props) {
		//todolist
		return (
			<div className="todo-list">
				<h1>{this.props.title}</h1>
				<TodoItem text="1231" />
				<TodoItem text="45623" />
				<TodoItem text="434454" />
				<TodoItem text="4343224" />
			</div>
		)
	};
};

export default TodoList;
