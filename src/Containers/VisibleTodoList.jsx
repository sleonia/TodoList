import { connect } from 'react-redux';
import {
  deleteItem, toggleItem, updateItem,
} from '../Actions';
import TodoList from '../Components/List';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../Constants/ActionTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((todo) => todo.isCompleted);
    case SHOW_ACTIVE:
      return todos.filter((todo) => !todo.isCompleted);
    default:
      throw new Error('Unknown filter: '.concat(filter));
  }
};

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = (dispatch) => ({
  deleteItem: (id) => dispatch(deleteItem(id)),
  updateItem: (text, id) => dispatch(updateItem(text, id)),
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
