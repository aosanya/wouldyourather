import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class OptionDisplay extends Component {

  render() {
    const { option, replies } = this.props

    if (option === null) {
      return <p>Unable to find this option</p>
    }


    return (
      <span>
        <span className='question-option'>{option.option}</span>
        {` (`}{replies.length}{replies.length === 1 ? ` vote` : ` votes`})
      </span>
    )
  }
}

function mapStateToProps ({questions}, { questionId, option }) {
    const question = questions[questionId]
    const replies = question.replies.filter((reply) => reply.option === option.id )
    return {
        option: option ? option : null,
        replies: replies ? replies : null,
    }
}

export default withRouter(connect(mapStateToProps)(OptionDisplay))