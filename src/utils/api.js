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
