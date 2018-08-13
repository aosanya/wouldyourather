import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddReply, handleGetQuestions } from '../services/poll/questions/api'

import { NotificationManager} from 'react-notifications';

const OptionRespond = (props) => {

  const handleChange = (e) => {
    if (!e.target.checked) return
    props.deactivator()
    props.dispatch(handleAddReply(props.question.id, props.id))
    props.dispatch(handleGetQuestions())
    NotificationManager.success('', 'Thank you for voting')

  }


  const {option, isSelected, isAnswered, isDeactivated }  = props
  const checkboxValue = isSelected ? 'checked' : ''
  if (option === null) {
    return <p>Unable to find this option</p>
  }

  return (
      <div className='question-option' >
        <span className='question-checkbox'>
          <input  type='checkbox' defaultChecked={checkboxValue} disabled={isAnswered || isDeactivated} onChange={handleChange.bind(this)}></input>
        </span>
        {option.text}
      </div>
  )
}


function mapStateToProps ({authedUser, questions}, { question, option , id, isDeactivated, deactivator }) {
    const authedUserId = authedUser.split('"').join('')
    let isSelected =  questions[question.id][id].votes.includes(authedUser)
    let isAnswered =  questions[question.id].optionOne['votes'].includes(authedUserId) || questions[question.id].optionTwo['votes'].includes(authedUserId)
    return {
        option: option ? option : null,
        isSelected : isSelected,
        isAnswered : isAnswered,
        isDeactivated : isDeactivated,
        deactivator : deactivator
    }
}

export default withRouter(connect(mapStateToProps)(OptionRespond))