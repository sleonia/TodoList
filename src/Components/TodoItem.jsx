import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ deleteItem, toggleItem, isCompleted, text, id }) => (
  <li
    className={(isCompleted) ? 'todo-item-completed' : 'todo-item-noncompleted'}
    onClick={toggleItem}
  >
   {text}
  <button type="submit" onClick={deleteItem}>Delete</button>
  </li>
);

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default TodoItem;
