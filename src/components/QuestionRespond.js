import React, { Component } from 'react'
import OptionRespond from './OptionRespond'


class QuestionRespond extends Component {

  render() {
    const { formatedQuestion } = this.props
    return (
        <div className='question-info'>
          Would You Rather?
          <OptionRespond key='optionOne' question = {formatedQuestion} id='optionOne' option={formatedQuestion.optionOne}/>
          <OptionRespond key='optionTwo' question = {formatedQuestion} id='optionTwo' option={formatedQuestion.optionTwo}/>
        </div>
    )
  }
}

export default QuestionRespond