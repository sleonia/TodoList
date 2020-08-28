import React from 'react';
import PropTypes from 'prop-types';
import './TodoItem.css';

const TodoItem = ({ deleteItem, toggleItem, isCompleted, text }) => (
  <li>
    <input
      defaultValue={text}
      className={(isCompleted)
        ? 'todo-item-completed'
        : 'todo-item-noncompleted'} >
    </input>
    <button type="submit" onClick={toggleItem}>Toggle</button>
    <button type="submit" onClick={deleteItem}>Delete</button>
  </li>
);

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  
};

export default TodoItem;
