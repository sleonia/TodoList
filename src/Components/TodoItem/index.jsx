import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const TodoItem = ({
  deleteItem, toggleItem, saveItem, isCompleted, text,
}) => (
  /* eslint-disable */
  <li>
    <input
      type="text"
      defaultValue={text}
      className={(isCompleted)
        ? styles.todoItemCompleted
        : styles.todoItemNonCompleted}
      onChange={(e) => {saveItem(e.target.value)}}
    >
    </input>
    <button type="submit" onClick={toggleItem}>Toggle</button>
    <button type="submit" onClick={deleteItem}>Delete</button>
  </li>
  /* eslint-enable */
);

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
