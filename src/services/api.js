import {
   _getUsers
  } from './utils/_DATA.js'





export function getUsers () {
  return Promise.all([
    _getUsers(),
  ]).then(([users]) => ({
    users,
  }))
}

