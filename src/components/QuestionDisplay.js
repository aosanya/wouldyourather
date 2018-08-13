import React from 'react'
import OptionDisplay from './OptionDisplay'

const QuestionDisplay = (props) => {
    const { formatedQuestion } = props

    return (
      <div className='question-info'>
        Would You Rather?
        <div className="options-stats">
          <OptionDisplay key='optionOne' question = {formatedQuestion} id='optionOne' option={formatedQuestion.optionOne}/>
          <OptionDisplay key='optionTwo' question = {formatedQuestion} id='optionTwo' option={formatedQuestion.optionTwo}/>
        </div>
      </div>
    )
  }

export default QuestionDisplay