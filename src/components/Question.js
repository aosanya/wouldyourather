import React from 'react'
import { connect } from 'react-redux'
import QuestionDisplay from './QuestionDisplay'
import QuestionRespond from './QuestionRespond'
import QuestionInfo from './QuestionInfo'

import Error404Private from './Error404Private'
import { formatQuestion }  from '../services/utils/helpers'
import ContentWrapper from './ContentWrapper'

const Question = (props) => {
    const { loading, question, noMatch } = props
    return (
      <ContentWrapper>
        {
          loading ? null
          :
            noMatch ? <Error404Private info='This poll does not exist'/>
            :
              <div className="panel roundedBorder">
                <QuestionInfo question={question}/>
                 { question.hasResponded
                    ? <QuestionDisplay formatedQuestion={question}/>
                    : <QuestionRespond formatedQuestion={question}/>
                  }
              </div>
        }
      </ContentWrapper>
    )
}

function mapStateToProps ({ users, questions, authedUser, fetchingData }, props) {
  const { question_id } = props.match.params
  const question = !fetchingData ? questions[question_id] : undefined
  var user = undefined
  var formatedQuestion = undefined

  if (question !== undefined){
    user = !fetchingData ? users[question.author] : undefined
    formatedQuestion = !fetchingData ? formatQuestion(question, user, authedUser) : undefined
  }

  const noMatch = fetchingData === false && question === undefined ? true : false

  return {
    question_id,
    question : formatedQuestion,
    loading : fetchingData,
    user : user,
    noMatch : noMatch,
  }
}

export default connect(mapStateToProps)(Question)