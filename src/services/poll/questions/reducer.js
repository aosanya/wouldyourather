import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_REPLY } from './actions'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
    return {
      ...state,
      ...action.questions
    }
    case ADD_REPLY :
     return state
    default :
      return state
  }
}