import { FETCHING_DATA } from './actions'

export default function users (state = {}, action) {

  switch(action.type) {
    case FETCHING_DATA :
      return action.fetchingData
    default :
      return state
  }
}