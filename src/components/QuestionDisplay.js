import React, { PureComponent } from 'react'

import { Link } from 'react-router-dom'
import OptionDisplay from './OptionDisplay'


class QuestionDisplay extends PureComponent {

  render() {
    const { question } = this.props
    const {optionOne, optionTwo} = question

    return (
      <Link to={`/Question/${question.id}`} className='questiondisplay'>
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

export default QuestionDisplay