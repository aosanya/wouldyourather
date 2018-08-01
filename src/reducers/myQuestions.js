import { RECEIVE_MYQUESTIONS } from '../actions/myQuestions'

export default function myQuestions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_MYQUESTIONS :
      return {
        ...state,
        ...action.myQuestions
      }
    default :
      return state
  }
}