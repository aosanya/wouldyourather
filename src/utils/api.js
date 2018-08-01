import {
    _getQuestions, _getUsers, _getCurrentUser, _getMyQuestions
  } from './_DATA.js'

  export function getInitialData () {
    return Promise.all([
      _getQuestions(),
    ]).then(([questions]) => ({
      questions,
    }))
  }

  export function getMyQuestions (userId) {
    return Promise.all([
      _getMyQuestions(userId),
    ]).then(([myQuestions]) => ({
      myQuestions,
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

  function myReplies(questions, myQuestionIds){
    const userQuestions = myQuestions(questions, myQuestionIds)
    return userQuestions.map((r) => r.replies)
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

  export function getLeaderboard () {
    return Promise.all([
      _getUsers(), _getQuestions()
    ]).then(([users, questions]) => (
      formatBoard(users, questions)
    ))
}