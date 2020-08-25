import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
	constructor(props) {
		super(props);

		this.onClick = this.props.onClick;
		this.isCompleted = this.props.isCompleted;
		this.text = this.props.text;
	}

	return (props) {
		<li
			onClick={onClick}
			className={this.isCompleted
				? "todo-item-completed"
				: "todo-item-noncompleted"}
		>
			{this.text}	
		</li>
	}
};
	
TodoItem.propTypes = { ////////////?????????????????????
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoItem;