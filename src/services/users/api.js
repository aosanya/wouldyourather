import {
    _getUsers,
} from '../utils/_DATA.js'

import { receiveUsers }  from './actions'

export function getUsers () {
    return Promise.all([
        _getUsers(),
    ]).then(([users]) => ({
        users,
    }))
}

export function handleGetUsers () {
    return (dispatch) => {
      return getUsers()
        .then(({ users }) => {
          dispatch(receiveUsers(users))
        })
    }
  }