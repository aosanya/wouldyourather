import React from 'react'
import { formatDate }  from '../services/utils/helpers'

const QuestionInfo = (props) => {
    const {  question} = props
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

export default QuestionInfo