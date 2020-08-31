import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem';
import styles from './style.module.css';

const TodoList = ({
  todos, deleteItem, saveItem, toggleItem,
}) => {
  return (
    <div className={styles.todo_list}>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isCompleted={todo.isCompleted}
            text={todo.text}
            id={todo.id}
            deleteItem={() => deleteItem(todo.id)}
            saveItem={(value) => saveItem(value, todo.id)}
            toggleItem={() => toggleItem(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteItem: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  toggleItem: PropTypes.func.isRequired,
};

export default TodoList;
