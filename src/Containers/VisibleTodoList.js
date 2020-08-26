import { connect } from 'react-redux'
import { toggleItem } from '../Actions/index'
import TodoList from '../Components/TodoList'
import { VisibilityFilters } from '../Actions/index'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case VisibilityFilters.ShowAll:
			return todos
		case VisibilityFilters.ShowCompleted:
			return todos.filter(t => t.isCompleted)
		case VisibilityFilters.ShowActive:
			return todos.filter(t => !t.isCompleted)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const mapStateToProps = state => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
	toggleItem: id => dispatch(toggleItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);