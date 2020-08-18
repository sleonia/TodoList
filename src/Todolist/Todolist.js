import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";
import {lists} from "./content.json"
import List from "./TodoItem/List";
import Item from "./TodoItem/Item";

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
			
			Object.entries(obj.items).forEach(([key]) => {
				let item = new Item(obj.items[key].text, obj.items[key].status)
				list.items.push(item);
			});
			
			this._lists.push(list);
		});
	}

	todoItem (text, status) {
		return <TodoItem text={text} status={status} />;
	}

	render (props) {
		this.jsonLoad();

		//React.createElement("div", { className: "content" }, null)
		var lists = this._lists.map((obj) => {
				var item = obj.items.map((value) => {
					return <TodoItem key={value.text} text={value.text} status={value.status} />
				})
				return <div className="todo-list" key="">{item}</div>
		});
		return <div>{lists}</div>;
		//return <div className="content">{lists}</div>;
	}
};

export default TodoList;
