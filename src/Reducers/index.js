import { combineReducers } from 'redux'
import todos from './Todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter
})