import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			items: this.props.obj.items || []
		};
	}

	deleteItem(obj, itemId) {
		this.setState(state => {
			delete obj.items[itemId];
			delete state.items[itemId];
			this.props.toLocalStorage();
			return state;
		})
	}

	saveTittle(event) {
		event.persist();
		this.setState(state => {
			this.props.obj.title = event.target.value;
			this.props.toLocalStorage();
			return state;
		})
	}

	render (props) {
		return (
			<div className="todo-list" id={this.props.id}>
				<button
					className="delete-list"
					onClick={() => this.props.deleteList()}>
					<p>x</p>
				</button>
				<input
					type="text"
					className="title"
					defaultValue={this.props.obj.title}
					onChange={this.saveItem}>
				</input>
				<div className="list">
					{this.state.items.map((item) => (
						item && (<TodoItem
									key={item.id}
									item={item}
									deleteItem={() => this.deleteItem(this.props.obj, item.id)}
									toLocalStorage={() => this.props.toLocalStorage()}
								/>)
					))}
					<button
						className="new-item"
						onClick={() => this.props.addItem(this.props.id)}>
						<p>New item</p>
					</button>
				</div>
			</div>);
	}
};

export default TodoList;
