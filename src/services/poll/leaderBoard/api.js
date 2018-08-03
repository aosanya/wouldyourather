import {
    questions
  } from '../../utils/_DATA.js'

import { receiveLeaderBoard }  from './actions'
import { _getUsers, _getQuestions} from '../../api'

  function myReplies(questions, myQuestionIds){
    const userQuestions = myQuestions(questions, myQuestionIds)
    return userQuestions.map((r) => r.replies)
  }

  function myQuestions(questions, myQuestionIds){
    return  questions.filter((f) => myQuestionIds.includes(f.id))
  }


  function sumArrayCount(totalCount, array){
    return totalCount + array.length
  }

  function formatBoard(users, questions) {
    const userDetails = Object.values(users)
    const questionsDetails = Object.values(questions)
    const leaderBoard = userDetails.map((user) =>({id: user.id, name: user.name, avatar : user.avatarURL, questions : myQuestions(questionsDetails, user.questions).length, replies : myReplies(questionsDetails, user.questions).reduce(sumArrayCount, 0)}))
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

