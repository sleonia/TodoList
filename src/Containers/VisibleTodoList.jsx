import { connect } from 'react-redux';
import {
  deleteItem, toggleItem, saveItem,
} from '../Actions';
import TodoList from '../Components/List';
import Actions from '../Constants/ActionTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Actions.SHOW_ALL:
      return todos;
    case Actions.SHOW_COMPLETED:
      return todos.filter((todo) => todo.isCompleted);
    case Actions.SHOW_ACTIVE:
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
  saveItem: (text, id) => dispatch(saveItem(text, id)),
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
