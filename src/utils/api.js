import {
    _getQuestions,
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }