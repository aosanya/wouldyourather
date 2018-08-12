import {
    _getUsers, _getQuestions
} from '../../utils/_DATA.js'

import { receiveLeaderBoard }  from './actions'

  function replies(user, questions) {
    var optionOneReplies = Object.values(questions).filter((q) => q.optionOne.votes.includes(user.id)).length
    var optionTwoReplies = Object.values(questions).filter((q) => q.optionTwo.votes.includes(user.id)).length
    return optionOneReplies + optionTwoReplies
  }

  function formatBoard(users, questions) {
    const userDetails = Object.values(users)
    const leaderBoard = userDetails.map((user) =>({id: user.id, name: user.name, avatar : user.avatarURL, questions : user.questions.length, replies : replies(user, questions)}))
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

