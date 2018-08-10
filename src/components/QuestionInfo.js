import React, { PureComponent } from 'react'
import { formatDate }  from '../services/utils/helpers'

class QuestionInfo extends PureComponent {
  render() {
    const {  question} = this.props
    return (
        <div>
            <img
                src={question.avatar}
                alt={`Avatar of ${question.name}`}
                className='avatar'
            />
            <span>{question.name} <span className="subInfo">@{formatDate(question.timestamp)}</span></span>
        </div>
    )
  }
}


export default QuestionInfo