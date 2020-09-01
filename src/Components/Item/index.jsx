import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';
import classNames from 'classnames';

const TodoItem = ({
  deleteItem, toggleItem, saveItem, isCompleted, text,
}) => {
  const inputStyle = classNames({
      [styles.todoItemCompleted]: isCompleted,
      [styles.todoItemNonCompleted]: !isCompleted,
  });

  return (
    <li>
      <input
        type="text"
        defaultValue={text}
        className={inputStyle}
        onChange={(e) => {saveItem(e.target.value)}}
      >
      </input>
      <button type="button" onClick={toggleItem}>Toggle</button>
      <button type="button" onClick={deleteItem}>Delete</button>
    </li>
  );
};

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
