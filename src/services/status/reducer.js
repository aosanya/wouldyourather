import { FETCHING_DATA, FETCHED_DATA } from './actions'

export function fetchingData (state = {}, action) {
  switch(action.type) {
    case FETCHING_DATA :
      return action.fetchingData
    default :
      return state
  }
}

export function fetchedData (state = {}, action) {
  switch(action.type) {
    case FETCHED_DATA :
      return action.fetchedData
    default :
      return state
  }
}