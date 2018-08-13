import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import QuestionInfo from './QuestionInfo'
import QuestionDisplay from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'
import {formatQuestion}  from '../services/utils/helpers'

class Home extends Component {
  state = {
    showingAnswered: false,
  }



  showAnswered = (e) => {
    this.setState(() => ({
      showingAnswered : true
    }))
  }

  showUnanswered = (e) => {
    this.setState(() => ({
      showingAnswered : false
    }))
  }

  render() {
    const { answeredQuestions, unAnsweredQuestions, loading } =  this.props
    const questionsToDisplay = this.state.showingAnswered ? answeredQuestions : unAnsweredQuestions

    return (
      <ContentWrapper>
        {loading ? null
        :
        <div className="panel">

            <div id="tabs">
              <div>
                <div className={this.state.showingAnswered ? `selected` : `unselected`} onClick={this.showAnswered}>
                  Answered Questions({answeredQuestions.length})
                </div>
              </div>
              <div>
                <div className={this.state.showingAnswered ? `unselected` : `selected`} onClick={this.showUnanswered}>
                  Unanswered Questions({unAnsweredQuestions.length})
                </div>
              </div>

          </div>
            {questionsToDisplay.length === 0 && !this.state.showingAnswered ? 'No questions to answer!! Maybe you should ask a question.' :
              (
                <ul>
                  {questionsToDisplay.map((question) => (
                      <li key={question.id} className="panel roundedBorder">
                          <QuestionInfo question={question}/>
                          <QuestionDisplay formatedQuestion={question}/>
                          <Link to={`/questions/${question.id}`} className="centered">View Poll</Link>
                      </li>
                    ))}
                </ul>
              )
            }
        </div>
        }
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ questions, users , authedUser, fetchingData }) {
  var answeredQuestions = undefined
  var unAnsweredQuestions = undefined


  if (!fetchingData){
    answeredQuestions = Object.values(questions).filter((q) => q.optionOne['votes'].includes(authedUser) || q.optionTwo['votes'].includes(authedUser))
    unAnsweredQuestions = Object.values(questions).filter((q) => !(q.optionOne['votes'].includes(authedUser)) && !(q.optionTwo['votes'].includes(authedUser)))
    //Formating
    answeredQuestions = answeredQuestions.map((a) => formatQuestion(a, users[a.author], authedUser))
    unAnsweredQuestions = unAnsweredQuestions.map((a) => formatQuestion(a, users[a.author], authedUser))
    //Sorting
    answeredQuestions = answeredQuestions.sort((a,b) => b.timestamp - a.timestamp)
    unAnsweredQuestions = unAnsweredQuestions.sort((a,b) => b.timestamp - a.timestamp)

  }

  return {
    loading : fetchingData,
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions: answeredQuestions,
    unAnsweredQuestions: unAnsweredQuestions,
  }
}

export default connect(mapStateToProps)(Home)