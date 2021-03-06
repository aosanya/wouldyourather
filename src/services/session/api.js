import { setAuthedUser, getAuthedUser, logOut } from './actions'

function AuthedUser(){
    const storageValue = sessionStorage.getItem('AuthedUser')
    if (storageValue === 'null') return ''
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

export function handleLogOut () {
    return (dispatch) => {
       return dispatch(logOut())
     }
   }