import {
  _saveQuestion
} from '../../utils/_DATA.js'

import {addQuestion} from './actions'

function saveQuestion (info) {
  return Promise.all([
    _saveQuestion(info)
  ]).then(([questions]) => (
    {questions}
  ))
}

export function handleAddQuestion (option1, option2) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    // dispatch(showLoading())


    return saveQuestion({
      option1,
      option2,
      author: authedUser
    })
      .then(({questions}) => {dispatch(addQuestion(questions))})
  }
}


