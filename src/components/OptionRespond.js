import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleAddReply, handleGetQuestions } from '../services/poll/questions/api'

import {NotificationContainer, NotificationManager} from 'react-notifications';

class OptionRespond extends Component {

  handleChange(e) {
    if (!e.target.checked) return
    this.props.dispatch(handleAddReply(this.props.question.id, this.props.id))
    this.props.dispatch(handleGetQuestions())
    NotificationManager.success('', 'Thank you for voting')
  }

  render() {
    const  {option, isSelected, isAnswered }  = this.props
    const checkboxValue = isSelected ? 'checked' : ''
    if (option === null) {
      return <p>Unable to find this option</p>
    }

    return (
        <div className='question-option' >
          <span className='question-checkbox'>
            <input  type='checkbox' defaultChecked={checkboxValue} disabled={isAnswered} onChange={this.handleChange.bind(this)}></input>
          </span>
          {option.text}
          <NotificationContainer/>
        </div>
    )
  }
}

function mapStateToProps ({authedUser, questions}, { question, option , id }) {
    const authedUserId = authedUser.split('"').join('')
    let isSelected =  questions[question.id][id].votes.includes(authedUser)
    let isAnswered =  questions[question.id].optionOne['votes'].includes(authedUserId) || questions[question.id].optionTwo['votes'].includes(authedUserId)

    return {
        option: option ? option : null,
        isSelected : isSelected,
        isAnswered : isAnswered,
    }
}

export default withRouter(connect(mapStateToProps)(OptionRespond))