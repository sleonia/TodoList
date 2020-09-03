import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../Item';
import styles from './style.module.css';

const TodoList = ({
  todos, deleteItem, updateItem, toggleItem,
}) => (
  <div className={styles.todo_list}>
    <ul>
      {todos.map(({ id, text, isCompleted }) => (
        <TodoItem
          key={id}
          isCompleted={isCompleted}
          text={text}
          id={id}
          deleteItem={() => deleteItem(id)}
          updateItem={(value) => updateItem(value, id)}
          toggleItem={() => toggleItem(id)}
        />
      ))}
    </ul>
  </div>
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
  updateItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default TodoList;
