export const RECEIVE_MYQUESTIONS = 'RECEIVE_MYQUESTIONS'

export function receiveMyQuestions (myQuestions) {
  return {
    type: RECEIVE_MYQUESTIONS,
    myQuestions,
  }
}