import React from "react"
import { connect } from "react-redux"
import { addItem } from "../Actions/index"

const AddTodo = ({ dispatch }) => {
	let input;////////?

	return (
		<div>
			<form
				onSubmit={e => {
        			e.preventDefault()
        			if (!input.value.trim()) {
        				return
        			}
					dispatch(addItem(input.value))
        			input.value = ""
				}}
			>
				<input ref={node => (input = node)} />
				<button type="submit">Add Item</button>
			</form>
		</div>
	)
}

export default connect()(AddTodo);