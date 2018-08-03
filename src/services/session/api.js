// import { getAuthedUser } from './actions'

// function _getCurrentUser () {

// }  const authedUserIdString = localStorage.getItem('user') || ''
//   const authedUserId = authedUserIdString.split('"').join('')
//   return new Promise((res, rej) => { authedUserId })
// }

// function getCurrentUser(){
//   return Promise.all([
//     _getCurrentUser(),
//   ]).then(([id, name]) => ({
//     id, name,
//   }))
// }

// export function handleAuthedUser () {
//  return (dispatch) => {
//     return getCurrentUser()
//       .then(({id, name}) => {
//         dispatch(setAuthedUser({id, name}))
//       })
//   }