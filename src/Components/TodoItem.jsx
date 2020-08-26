import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ onClick, isCompleted, text }) => (
  <li
    className={(isCompleted) ? 'todo-item-completed' : 'todo-item-noncompleted'}
    onClick={onClick}
  >
   {text}
  </li>
);

TodoItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
