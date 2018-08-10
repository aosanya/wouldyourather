import React, { Component } from 'react'
import OptionDisplay from './OptionDisplay'
import { Link } from 'react-router-dom'

class QuestionDisplay extends Component {
  render() {
    const { formatedQuestion } = this.props
    return (
      <Link to={`/questions/${formatedQuestion.id}`}>
          <div className='question-info'>
            Would You Rather?
            <div className="options-stats">
              <OptionDisplay key='optionOne' question = {formatedQuestion} id='optionOne' option={formatedQuestion.optionOne}/>
              <OptionDisplay key='optionTwo' question = {formatedQuestion} id='optionTwo' option={formatedQuestion.optionTwo}/>
            </div>
          </div>
      </Link>
    )
  }
}
export default QuestionDisplay