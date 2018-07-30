import { combineReducers } from 'redux'
import questions from './questions'
import users from './security'
import authedUser from './authedUser'
import leaderBoard from './leaderBoard'

export default combineReducers({
  authedUser,
  leaderBoard,
  questions,
  users,
})