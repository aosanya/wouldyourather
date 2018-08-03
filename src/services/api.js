import {
    questions, users,  _saveQuestion
  } from '../utils/_DATA.js'



export function _getQuestions () {
  return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
  })
}



export function _getUsers () {
  return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
  })
}


  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }



export function getUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}


export function saveQuestion (info) {
  return Promise.all([
    _saveQuestion(info)
  ]).then(([questions]) => (
    {questions}
  ))
}