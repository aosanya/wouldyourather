import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDisplay from './QuestionDisplay'
import {formatQuestion, formatDate}  from '../services/utils/helpers'
import ContentWrapper from './ContentWrapper'

class Question extends Component {
  render() {
    const { loading, question_id, question } = this.props
    console.log(question)
    return (
      <ContentWrapper>
        {
          loading ? null
          :
            <div className="panel">
              <div>
                <img
                  src={question.avatar}
                  alt={`Avatar of ${question.name}`}
                  className='avatar'
                />
                <span>{question.name} <span className="subInfo">@{formatDate(question.timestamp)}</span></span>
              </div>
              <QuestionDisplay formatedQuestion={question}/>
            </div>
        }
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ users, questions, authedUser, fetchingData }, props) {
  const { question_id } = props.match.params
  const question = !fetchingData ? questions[question_id] : undefined
  const user = !fetchingData ? users[question.author] : undefined
  const formatedQuestion = !fetchingData ? formatQuestion(question, user, authedUser) : undefined

  console.log(formatedQuestion)
  return {
    question_id,
    question : formatedQuestion,
    loading : fetchingData,
    user : user,
  }
}

export default connect(mapStateToProps)(Question)