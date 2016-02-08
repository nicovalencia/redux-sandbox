import { combineReducers } from 'redux'
import todos from './todos'
import people from './people'
import visibilityFilter from './visibilityFilter'
import activeProfileId from './activeProfileId'

const todoApp = combineReducers({
  todos,
  people,
  visibilityFilter,
  activeProfileId
})

export default todoApp