import { connect } from 'react-redux';
import {
  deleteItem, toggleItem, saveItem,
} from '../Actions';
import TodoList from '../Components/List';
import Actions from '../Constants/ActionTypes';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Actions.ShowAll:
      return todos;
    case Actions.ShowCompleted:
      return todos.filter((t) => t.isCompleted);
    case Actions.ShowActive:
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
  saveItem: (text, id) => dispatch(saveItem(text, id)),
  toggleItem: (id) => dispatch(toggleItem(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
