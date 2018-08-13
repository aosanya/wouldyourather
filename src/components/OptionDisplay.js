import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
class OptionDisplay extends Component {

  render() {
    const { question, option, percentageVotes, user, isSelected } = this.props

    return (
      <div key={`Option${question.id}`} className={`question-option ${isSelected ? `selected` : null}`}>
        <div className="option-details">
          <div className="question-text">{option.text}</div>
          <span className='question-vote'>
            {option.votes.length}{option.votes.length === 1 ? ` vote  ` : ` votes`} ({percentageVotes}%)
            <span className='question-selected'>
                {!isSelected ? null : <span class="glyphicon glyphicon-ok"></span>}
            </span>
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
  const isSelected =  questions[question.id][id].votes.includes(authedUser)

  const isAnswered =  questions[question.id].optionOne['votes'].includes(authedUserId) || questions[question.id].optionTwo['votes'].includes(authedUserId)

  const totalVotes =  questions[question.id].optionOne['votes'].length + questions[question.id].optionTwo['votes'].length
  const percentageVotes = totalVotes > 0 ? Math.round((option.votes.length / totalVotes) * 100) : 0
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