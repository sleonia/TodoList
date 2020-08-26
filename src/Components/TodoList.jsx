import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleItem }) => (
  <ul>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        isCompleted={todo.isCompleted}
        text={todo.text}
        onClick={() => toggleItem(todo.id)}
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
  toggleItem: PropTypes.func.isRequired,
};

export default TodoList;
