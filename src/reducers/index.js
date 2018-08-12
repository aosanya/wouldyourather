import { combineReducers } from 'redux'
import questions from '../services/poll/questions/reducer'
import users from '../services/users/reducer'
import authedUser from '../services/session/reducer'
import {fetchingData, fetchedData} from '../services/status/reducer'
import leaderBoard from '../services/poll/leaderBoard/reducer'
import { LOG_OUT } from '../services/session/actions'

const appReducer = combineReducers({
  authedUser,
  leaderBoard,
  questions,
  users,
  fetchingData,
  fetchedData,
})

const rootReducer = ( state, action ) => {
  if ( action.type === LOG_OUT ) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer