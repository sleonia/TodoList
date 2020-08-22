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

	deleteItem = (obj, itemId) => {
		this.setState(state => {
			delete obj.items[itemId];
			delete state.items[itemId];
			this.props.toLocalStorage();
			return state;
		})
	}

	//saveItem (e, obj, itemId, item) {
	//	console.log(1);
	//	this.setState(state => {
	//		item.text = e.target.value;
	//		let json = JSON.parse(localStorage.getItem("data"));
	//		json[listId].items[itemId] = item;
	//		localStorage.setItem("data", JSON.stringify(json));
	//		return state;
	//	})
	//}

	//saveItem (e, listId, itemId, item) {
	//	console.log(1);
	//	this.setState(state => {
	//		let tmp = {
	//			id: item.id,
	//			text: e.target.value,
	//			isCompleted: item.isCompleted
	//		}
	//		JSON.parse(tmp);
	//		return state;
	//	})
	//}

	saveItem = (event) => {
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
									//saveItem={() => this.saveItem(this.props.obj, item.id, item)}
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