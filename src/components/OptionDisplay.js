import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class OptionDisplay extends PureComponent {

  render() {
    const { question, option } = this.props
    const replies = question.replies.filter((reply) => reply.option === option.id )
    return (
      <div key={`Option${question.id}`} className='question-option'>
        <span className='question-vote'>
          {replies.length}{replies.length === 1 ? ` vote` : ` votes`}
        </span>
        <span>{option.option}</span>
      </div>
    )
  }
}

export default OptionDisplay