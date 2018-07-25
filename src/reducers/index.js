import { combineReducers } from 'redux'
import questions from './questions'
import users from './security'

export default combineReducers({
  questions,
  users,
})