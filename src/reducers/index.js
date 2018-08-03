import { combineReducers } from 'redux'
import questions from './questions'
import users from './security'
import authedUser from '../services/session/reducer'
import leaderBoard from '../services/poll/leaderBoard/reducer'
import myQuestions from '../services/poll/myQuestions/reducer'
import { LOG_OUT } from '../actions/logout'

const appReducer = combineReducers({
  authedUser,
  leaderBoard,
  questions,
  myQuestions,
  users,
})

const rootReducer = ( state, action ) => {
  if ( action.type === LOG_OUT ) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer