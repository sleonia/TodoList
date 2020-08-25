import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

class TodoList extends React.Component {
	constructor(props) {
		super(props);

		this.todos = this.props.todos;
		this.toggleTodo = this.props.toggleTodo;
	}

	render(props) {
		<ul>
		{this.todos.map(todo => (
			<TodoItem key={todo.id} {...todo} onClick={() => this.toggleTodo(todo.id)} />
		))}
		</ul>
	}
}

TodoList.PropTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			isCompleted: PropTypes.bool.isRequired,
			text: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	toggleTodo: PropTypes.func.isRequired
}

export default TodoList;