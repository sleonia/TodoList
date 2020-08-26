import { connect } from 'react-redux';
import { deleteItem, toggleItem, VisibilityFilters } from '../Actions/index';
import TodoList from '../Components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.ShowAll:
      return todos;
    case VisibilityFilters.ShowCompleted:
      return todos.filter((t) => t.isCompleted);
    case VisibilityFilters.ShowActive:
      return todos.filter((t) => !t.isCompleted);
    default:
      throw new Error('Unknown filter: '.concat(filter));
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
