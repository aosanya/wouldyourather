import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import OptionDisplay from './OptionDisplay'


class QuestionDisplay extends PureComponent {

  render() {
    const { question } = this.props

    return (
      <Link to={`/Question/${question.id}`} className='questiondisplay'>
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
              <div className="options-stats">
                    {question.options.map((option) => (
                        <OptionDisplay key={option.id} question={question} option={option}/>
                    ))}
              </div>
            </div>
        </div>
      </Link>
    )
  }
}

export default QuestionDisplay