import {
   _getUsers,
   _getQuestions,
  } from './utils/_DATA.js'

import { receiveUsers } from './users/actions'
import { receiveQuestions } from './poll/questions/actions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleFetchingData, handleFetchedData } from './status/api'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    dispatch(handleFetchingData(true))
    dispatch(handleFetchedData(false))
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(hideLoading())
        dispatch(handleFetchingData(false))
        dispatch(handleFetchedData(true))
      })
  }
}
