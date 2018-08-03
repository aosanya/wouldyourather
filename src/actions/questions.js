import { saveQuestion } from '../services/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion (questions) {
  return {
    type: ADD_QUESTION,
    questions,
  }
}

export function handleAddQuestion (option1, option2) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())


    return saveQuestion({
      option1,
      option2,
      author: authedUser.AuthedUserId
    })
      .then(({questions}) => {dispatch(addQuestion(questions))})
  }
}


