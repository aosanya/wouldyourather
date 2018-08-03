import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'
import { handleGetMyQuestions } from '../services/poll/myQuestions/api'

class MyQuestions extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetMyQuestions(this.props.authedUserId))
  }


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

function mapStateToProps ({ myQuestions, authedUser }) {
  var thisQuestions = undefined
  if (myQuestions !== null){
    thisQuestions = Object.values(myQuestions)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)
  }

  return {
    authedUserId: authedUser,
    myQuestions: Object.values(thisQuestions)
  }
}

export default connect(mapStateToProps)(MyQuestions)