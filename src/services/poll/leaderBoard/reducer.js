import { RECEIVE_LEADERBOARD } from './actions'

export default function leaderboard (state = {}, action) {
  switch(action.type) {
    case RECEIVE_LEADERBOARD :
      return {
        ...state,
        ...action.leaderBoard
      }
    default :
      return state
  }
}