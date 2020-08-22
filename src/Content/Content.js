import React from "react";
import "./Content.css";
import TodoList from "./Todolist/Todolist"

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: JSON.parse(localStorage.getItem("data")) || []
		}
	}
	
	toLocalStorage = () => {
		localStorage.setItem("data", JSON.stringify(this.state.data));
	}
	
	fromLocalStorage = () => {
		this.setState(() => {
			const data = JSON.parse(localStorage.getItem("data"));
			return data;
		})
	}

	addList = () => {
		this.setState(state => {
			const data = state.data.push({
				id: state.data.length,
				title: "New list",
				items: []
			});
			this.toLocalStorage();
			console.log(this.state.data);
			return data;
		})
	}

	deleteList = (listId) => {
		this.setState(state => {
			const data = state.data.splice(listId, 1);
			this.toLocalStorage();
			return data;
		})
	}

	addItem = (listId) => {
		console.log(this.state.data[listId]);
		this.setState(state => {
			let item = {
				id: state.data[listId].items.length || 0,
				text: "",
				isCompleted: false
			};
			const data = state.data[listId].items.push(JSON.parse(JSON.stringify(item)));
			this.toLocalStorage();
			return data;
		})
	}

	deleteItem = (listId, itemId) => {
		this.setState(state => {
			const data = state.data[listId].splice(itemId, 1);
			this.toLocalStorage();
			return data;
		})
	}

	changeStatus = () => {
		this.setState(previousState => {
			return {
				isCompleted: !previousState.isCompleted
			}
		})
	}

	render () {
		return (
			<div className="content">
				{this.state.data.map((obj) => (
					<TodoList
						key={obj.id}
						obj={obj}
						deleteList={() => this.deleteList(obj.id)}
						deleteItem={() => this.deleteItem(obj.id)}
						addItem={() => this.addItem(obj.id)}
					/>
				))}
				<button
					className="addList"
					onClick={() => this.addList()}>
					New list
				</button>
			</div>
		)
	};
};

export default Content;
