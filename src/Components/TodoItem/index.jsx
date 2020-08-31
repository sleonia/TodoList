import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

const handleChange = (value, saveItem) => { // move to onChange?????
  console.log(value);
  saveItem(value, 0);
};

const TodoItem = ({
  deleteItem, toggleItem, saveItem, isCompleted, text,
}) => (
  <li>
    <input
      type="text"
      // placeholder={text}
      defaultValue={text}
//      value={text}
      className={(isCompleted)
        ? styles.todoItemCompleted
        : styles.todoItemNonCompleted}
      onChange={(e) => {handleChange(e.target.value, saveItem)}}
    >
    </input>
    <button type="submit" onClick={toggleItem}>Toggle</button>
    <button type="submit" onClick={deleteItem}>Delete</button>
  </li>
);

TodoItem.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
