import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = ({
  deleteItem, toggleItem, isCompleted, text,
}) => (
  <li>
    <input
      type="text"
      placeholder={text}
      defaultValue={text}
      className={(isCompleted)
        ? styles.todoItemCompleted
        : styles.todoItemNonCompleted}
    >
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
