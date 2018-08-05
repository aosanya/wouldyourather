export const ADD_QUESTION = 'ADD_QUESTION'

export function addQuestion (questions) {
  return {
    type: ADD_QUESTION,
    questions,
  }
}

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}


export const ADD_REPLY = 'ADD_REPLY'

export function addReply () {
  return {
    type: ADD_REPLY,
  }
}