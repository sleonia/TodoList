import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			obj: props.obj
		};
	}

	render (props) {
		return (
			<div className="todo-list" id={this.props.id}>
					<button
						className="delete-list"
						onClick={() => this.props.deleteList()}>
						x
					</button>
					<input
						type="text"
						className="title"
						defaultValue={this.props.obj.title}>
					</input>
					<div className="list">
						{this.props.obj.items.map((item) => {
							return <TodoItem
										key={item.id}
										id={this.props.id + item.id}
										deleteItem={() => this.props.deleteItem(this.props.id + item.id)} ////???? 
										//addItem={() => this.props.addItem} ////???? 
										//deleteItem={() => this.props.deleteItem(this.props.id + item.id)} ////???? 
									/>
								})}
						<button
							className="new-item"
							onClick={() => this.props.addItem()}>
							New item
						</button>
					</div>
			</div>);
	}
};

export default TodoList;
