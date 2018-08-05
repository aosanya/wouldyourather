import {  getUsers } from '../services/api'
import { receiveUsers } from './security'





export function handleUsers () {
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}



