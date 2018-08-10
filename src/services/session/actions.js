export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const GET_AUTHED_USER = 'GET_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function getAuthedUser (id) {
  return {
    type: GET_AUTHED_USER,
    id,
  }
}

export const LOG_OUT = 'LOG_OUT'

export function logOut () {
  return {
    type: LOG_OUT,
  }
}