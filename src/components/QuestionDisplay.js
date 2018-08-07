import React, { PureComponent } from 'react'
import OptionDisplay from './OptionDisplay'
import { connect } from 'react-redux'
import { formatQuestion } from '../services/utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class QuestionDisplay extends PureComponent {
  render() {
    const { question } = this.props
    const {optionOne, optionTwo} = question

    return (
      <Link to={`/questions/${question.id}`}>
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
              <div className="options-stats">
                <OptionDisplay key='optionOne' question = {question} id='optionOne' option={optionOne}/>
                <OptionDisplay key='optionTwo' question = {question} id='optionTwo' option={optionTwo}/>
              </div>
            </div>
        </div>
        </Link>
    )
  }
}

function mapStateToProps ({questions}, { question_id }) {

  const question = questions[question_id]
  return {
    question: question
      ? formatQuestion(question)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDisplay))