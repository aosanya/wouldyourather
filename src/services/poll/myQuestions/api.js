
import {
    questions
  } from '../../utils/_DATA.js'

  import { receiveMyQuestions } from '../myQuestions/actions'


function _getMyQuestions (userId) {
    const key = userId.split('"').join('')
    const myQuestions = Object.values(questions).filter((f) => f.author === key)
    return new Promise((res, rej) => { res({...myQuestions})})
}

function getMyQuestions (userId) {
  return Promise.all([
    _getMyQuestions(userId),
  ]).then(([myQuestions]) => ({
    myQuestions,
  }))
}

export function handleGetMyQuestions (userId) {
  return (dispatch) => {
    return getMyQuestions(userId)
      .then(({ myQuestions }) => {
        dispatch(receiveMyQuestions(myQuestions))
      })
  }
}

