import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, deleteItem, toggleItem }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        isCompleted={todo.isCompleted}
        text={todo.text}
        id={todo.id}
        deleteItem={() => deleteItem(todo.id)}
        toggleItem={() => toggleItem(todo.id)}
        //toggleItem={() => console.log(todo.id)}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default TodoList;
