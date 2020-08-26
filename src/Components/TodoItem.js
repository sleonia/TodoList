import React from 'react'
import PropTypes from 'prop-types'

const TodoItem = ({ onClick, isCompleted, text }) => (
	<li
		onClick={onClick}
		className={isCompleted
			? "todo-item-completed"
			: "todo-item-noncompleted"}
	>
		{text}	
	</li>
)
	
TodoItem.propTypes = { ////////////?????????????????????
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;