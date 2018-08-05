import {
  _getQuestions, _saveQuestion, _saveQuestionAnswer
} from '../../utils/_DATA.js'

import {addQuestion, addReply, receiveQuestions} from './actions'

export function getQuestions () {
  return Promise.all([
    _getQuestions(),
  ]).then(([questions]) => ({
    questions,
  }))
}

export function handleGetQuestions () {
  return (dispatch) => {
    return getQuestions()
      .then(({ questions }) => {
        dispatch(receiveQuestions(questions))
      })
  }
}


function saveQuestion (info) {
  return Promise.all([
    _saveQuestion(info)
  ]).then(([questions]) => (
    {questions}
  ))
}

export function handleAddQuestion (option1, option2) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    // dispatch(showLoading())


    return saveQuestion({
      option1,
      option2,
      author: authedUser
    })
      .then(({questions}) => {dispatch(addQuestion(questions))})
  }
}


function SaveReply (info) {
  return Promise.all([
    _saveQuestionAnswer(info)
  ]).then(([questions]) => (
    {questions}
  ))
}

export function handleAddReply (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return SaveReply({
      authedUser,
      qid,
      answer
    })
      .then(() => {dispatch(addReply())})
  }
}

