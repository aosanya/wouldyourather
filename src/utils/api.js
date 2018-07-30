import {
    _getQuestions, _getUsers, _getCurrentUser,
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }

  export function getUsers () {
    return Promise.all([
      _getUsers(),
    ]).then(([users]) => ({
      users,
    }))
  }

  export function getCurrentUser(){
    return Promise.all([
      _getCurrentUser(),
    ]).then(([AuthedUserId, isAuthenticated]) => ({
      AuthedUserId,
      isAuthenticated,
    }))
  }

  function myQuestions(questions, myQuestionIds){
    return  questions.filter((f) => myQuestionIds.includes(f.id))
  }

  function formatBoard(users, questions) {
    const userDetails = Object.values(users)
    const questionsDetails = Object.values(questions)

    const leaderBoard = userDetails.map((user) =>({id: user.id, name: user.name, questions : myQuestions(questionsDetails, user.questions) }))
    console.log(leaderBoard)
    return {leaderBoard}
  }

  export function getLeaderboard () {
    return Promise.all([
      _getUsers(), _getQuestions()
    ]).then(([users, questions]) => (
      formatBoard(users, questions)
    ))
}