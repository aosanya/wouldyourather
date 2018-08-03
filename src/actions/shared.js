import { getInitialData, getUsers } from '../services/api'
import { receiveQuestions } from '../services/poll/questions/actions'
import { receiveUsers } from './security'

export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ questions }) => {
        dispatch(receiveQuestions(questions))
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



