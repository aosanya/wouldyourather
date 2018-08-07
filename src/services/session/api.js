import { setAuthedUser, getAuthedUser } from './actions'

function AuthedUser(){
    const storageValue = sessionStorage.getItem('AuthedUser')
    const authedId= storageValue.split('"').join('')
    return authedId
}

export function handleSetAuthedUser (userId) {
    sessionStorage.setItem('AuthedUser', userId);
    return (dispatch) => {
        return dispatch(setAuthedUser(AuthedUser()))
    }
}

export function handleGetAuthedUser () {
 return (dispatch) => {
    return dispatch(getAuthedUser(AuthedUser()))
  }
}