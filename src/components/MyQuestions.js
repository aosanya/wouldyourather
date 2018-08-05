import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'

class MyQuestions extends Component {


  render() {
    const myQuestions  = this.props.myQuestions
    return (
      <ContentWrapper>
        <div className="myquestions">
            <ul className='dashboard-list'>
              {myQuestions == undefined ?
                'Loading My Questions...' :
                (myQuestions.map((question) => (
                  <li key={question.id}>
                    <QuestionDisplay question={question}/>
                  </li>
                )))
              }
            </ul>
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {
  var thisQuestions = undefined
  if (questions !== undefined){
    thisQuestions = Object.values(questions).filter((f) => f.author === authedUser)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)
  }

  return {
    authedUserId: authedUser,
    myQuestions: Object.values(thisQuestions)
  }
}

export default connect(mapStateToProps)(MyQuestions)