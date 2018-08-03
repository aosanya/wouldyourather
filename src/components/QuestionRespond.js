import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../services/utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import OptionRespond from './OptionRespond'


class QuestionRespond extends Component {

  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const {
      id, timestamp, options, replies} = question

    return (
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
                {options.map((option) => (
                    <OptionRespond questionId = {id} option={option}/>
                ))}
            </div>
        </div>
    )
  }
}

function mapStateToProps ({questions}, { id }) {
  const question = questions[id]

  return {
    question: question
      ? formatQuestion(question)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionRespond))