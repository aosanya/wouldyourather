import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'
import { handleGetMyQuestions, handleAuthedUser } from '../actions/shared'

class MyQuestions extends Component {
  state = {
    authedUserId: undefined,
    questionsFetching: false,
  }

   componentDidMount() {
    const { authedUserId, myQuestions }  = this.props
    this.props.dispatch(handleAuthedUser())
   }


   componentDidUpdate() {
      const { authedUserId, myQuestions }  = this.props
      console.log(authedUserId)
      console.log(!this.state.questionsFetching)
      if (!this.state.questionsFetching && authedUserId !== undefined){
        this.props.dispatch(handleGetMyQuestions(authedUserId))
        this.setState(() => ({
          questionsFetching: true
        }))
      }
   }

  render() {
    const { authedUserId, myQuestions }  = this.props
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

  var authedUserId = undefined
  if (authedUser !== null){
    authedUserId = authedUser.AuthedUserId
  }

  var thisQuestions = undefined
  if (myQuestions !== null){
    thisQuestions = Object.values(myQuestions)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)
  }

  return {
    authedUserId: authedUserId,
    myQuestions: Object.values(thisQuestions)
  }
}

export default connect(mapStateToProps)(MyQuestions)