import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.module.css';

const Item = ({
  deleteItem, toggleItem, saveItem, isCompleted, text,
}) => {
  const inputStyle = classnames({
    [styles.todoItemCompleted]: isCompleted,
    [styles.todoItemNonCompleted]: !isCompleted,
  });

  return (
    <li>
      <input
        type="text"
        defaultValue={text}
        className={inputStyle}
        onChange={(e) => { saveItem(e.target.value); }}
      />
      <button type="button" onClick={toggleItem}>Toggle</button>
      <button type="button" onClick={deleteItem}>Delete</button>
    </li>
  );
};

Item.propTypes = {
  deleteItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Item;
