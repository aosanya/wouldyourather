import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import OptionDisplay from './OptionDisplay'


class QuestionDisplay extends Component {

  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }

    const {
      id, timestamp, options, replies} = question

    return (
      <Link to={`/Question/${id}`} className='questiondisplay'>
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
              <div className="options-stats">
                    {options.map((option) => (
                        <OptionDisplay  questionId = {id} option={option}/>
                    ))}
              </div>
            </div>
        </div>
      </Link>
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

export default withRouter(connect(mapStateToProps)(QuestionDisplay))