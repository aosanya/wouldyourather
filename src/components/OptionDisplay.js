import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class OptionDisplay extends Component {

  render() {
    const { question, option } = this.props

    return (
      <div key={`Option${question.id}`} className='question-option'>
        <span className='question-vote'>
          {option.votes.length}{option.votes.length === 1 ? ` vote  ` : ` votes`}
        </span>
        <span>{option.text}</span>
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

export default withRouter(connect(mapStateToProps)(OptionDisplay))