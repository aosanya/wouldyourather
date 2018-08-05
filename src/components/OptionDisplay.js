import React, { Component } from 'react'
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



export default OptionDisplay