import { getInitialData, getUsers, getCurrentUser, getLeaderboard } from '../utils/api'
import { receiveQuestions } from './questions'
import { receiveUsers } from './security'
import { getAuthedUser } from './authedUser'
import { receiveLeaderBoard } from './leaderboard'


export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions }) => {
        dispatch(receiveQuestions(questions))
      })
  }
}

export function handleAuthedUser () {

  return (dispatch) => {
    return getCurrentUser()
      .then(({ AuthedUserId}) => {
        dispatch(getAuthedUser(AuthedUserId))
      })
  }
}

export function handleUsers () {
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}


export function handleGetLeaderBoard () {
  return (dispatch) => {
    return getLeaderboard()
      .then(({ leaderBoard }) => {
        dispatch(receiveLeaderBoard(leaderBoard))
      })
  }
}

