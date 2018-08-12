import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'
import {formatQuestion}  from '../services/utils/helpers'

class MyQuestions extends Component {
  render() {
    const {myQuestions, fetchingData}  = this.props
    return (
      <ContentWrapper>
        <div className="panel">
            <ul className='dashboard-list'>
              {fetchingData ? null :
                (myQuestions.map((question) => (
                  <li key={question.id}>
                    <QuestionDisplay formatedQuestion={question}/>
                  </li>
                )))
              }
            </ul>
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ authedUser, questions, users, fetchingData }) {
  var thisQuestions = undefined
  if (questions !== undefined){
    thisQuestions = Object.values(questions).filter((f) => f.author === authedUser)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)

    thisQuestions = thisQuestions.map((a) => formatQuestion(a, users[a.author], authedUser))
    //Sorting
    thisQuestions = thisQuestions.sort((a,b) => b.timestamp - a.timestamp)

  }

  return {
    loading : fetchingData,
    authedUserId: authedUser,
    myQuestions: thisQuestions
  }
}

export default connect(mapStateToProps)(MyQuestions)