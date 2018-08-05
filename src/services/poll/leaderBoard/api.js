import {
    _getUsers, _getQuestions
} from '../../utils/_DATA.js'

import { receiveLeaderBoard }  from './actions'

  function formatBoard(users, questions) {
    const userDetails = Object.values(users)
    const leaderBoard = userDetails.map((user) =>({id: user.id, name: user.name, avatar : user.avatarURL, questions : user.questions.length, replies : user.replies.length}))
    return {leaderBoard}
  }

 function getLeaderboard () {
    return Promise.all([
      _getUsers(), _getQuestions()
    ]).then(([users, questions]) => (
      formatBoard(users, questions)
    ))
}

export function handleGetLeaderBoard () {
  return (dispatch) => {
    return getLeaderboard()
      .then(({ leaderBoard }) => {
        dispatch(receiveLeaderBoard(leaderBoard))
      })
  }
}

