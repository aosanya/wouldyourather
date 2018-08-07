import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionRespond from './QuestionDisplay'
import ContentWrapper from './ContentWrapper'

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
    const { answeredQuestions, unAnsweredQuestions } =  this.props
    const questionsToDisplay = this.state.showingAnswered ? answeredQuestions : unAnsweredQuestions

    return (
      <ContentWrapper>

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
                      <li key={question.id}>
                          <QuestionRespond question_id={question.id}/>
                      </li>
                    ))}
                </ul>
              )
            }
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ questions , authedUser }) {
  const answeredQuestions = Object.values(questions).filter((q) => q.optionOne['votes'].includes(authedUser) || q.optionTwo['votes'].includes(authedUser))
  const unAnsweredQuestions = Object.values(questions).filter((q) => !(q.optionOne['votes'].includes(authedUser)) && !(q.optionTwo['votes'].includes(authedUser)))
  console.log(answeredQuestions)
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions: answeredQuestions.sort((a,b) => b.timestamp - a.timestamp),
    unAnsweredQuestions: unAnsweredQuestions.sort((a,b) => b.timestamp - a.timestamp),
  }
}

export default connect(mapStateToProps)(Home)