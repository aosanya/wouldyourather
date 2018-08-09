import React, { PureComponent, Fragment } from 'react'
import OptionDisplay from './OptionDisplay'
import { connect } from 'react-redux'
import { formatQuestion } from '../services/utils/helpers'
import { Link, withRouter } from 'react-router-dom'

class QuestionDisplay extends PureComponent {
  render() {
    const { formatedQuestion } = this.props
    return (
      <Link to={`/questions/${formatedQuestion.id}`}>
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
              <div className="options-stats">
                <OptionDisplay key='optionOne' question = {formatedQuestion} id='optionOne' option={formatedQuestion.optionOne}/>
                <OptionDisplay key='optionTwo' question = {formatedQuestion} id='optionTwo' option={formatedQuestion.optionTwo}/>
              </div>
            </div>
        </div>
      </Link>
    )
  }
}
export default QuestionDisplay