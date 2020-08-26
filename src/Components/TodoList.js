import React from 'react'
import PropTypes from 'prop-types'
import Todo from '../Components/Todo.js'

const TodoList = ({ todos, toggleItem }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={() => toggleItem(todo.id)} />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleItem: PropTypes.func.isRequired
}

export default TodoList