import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class OptionDisplay extends Component {

  render() {
    const { question, option, percentageVotes, user, isSelected } = this.props

    return (
      <div key={`Option${question.id}`} className='question-option'>
        <div className="option-details">
          <div className="question-text">{option.text}</div>
          <span className='question-vote'>
            {option.votes.length}{option.votes.length === 1 ? ` vote  ` : ` votes`} ({percentageVotes}%)
          </span>
        </div>
        <div>
          {!isSelected ? null :
                <img
                src={user.avatarURL}
                alt={`Avatar of ${user.name}`}
                className='avatar_small'
              />
          }
        </div>
      </div>
    )
  }
}



function mapStateToProps ({authedUser, questions, users}, { question, option , id }) {
  const authedUserId = authedUser.split('"').join('')
  let isSelected =  questions[question.id][id].votes.includes(authedUser)

  let isAnswered =  questions[question.id].optionOne['votes'].includes(authedUserId) || questions[question.id].optionTwo['votes'].includes(authedUserId)
  const totalVotes =  questions[question.id].optionOne['votes'].length + questions[question.id].optionTwo['votes'].length
  const percentageVotes = Math.round((option.votes.length / totalVotes) * 100)
  const user = users[authedUserId]
  return {
      option: option ? option : null,
      isSelected : isSelected,
      isAnswered : isAnswered,
      percentageVotes : percentageVotes,
      user : user,
  }
}

export default withRouter(connect(mapStateToProps)(OptionDisplay))