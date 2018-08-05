import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionRespond from './QuestionRespond'
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
        <div className="myquestions">
        <button onClick={this.showAnswered}>
          Answered Questions({answeredQuestions.length})
        </button>
        <button onClick={this.showUnanswered}>
          Unanswered Questions({unAnsweredQuestions.length})
        </button>
        <div >
          {questionsToDisplay.length === 0 && !this.state.showingAnswered ? 'No questions to answer!! Maybe you should ask a question.' :
             (
              <ul className='dashboard-list'>
                {questionsToDisplay.map((question) => (
                    <li key={question.id}>
                      <QuestionRespond question={question}/>
                    </li>
                  ))}
                </ul>
              )
          }
        </div>

        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ questions , authedUser }) {
  const answeredQuestions = Object.values(questions).filter((q) => q.optionOne['votes'].includes(authedUser) || q.optionTwo['votes'].includes(authedUser))
  const unAnsweredQuestions = Object.values(questions).filter((q) => !(q.optionOne['votes'].includes(authedUser)) && !(q.optionTwo['votes'].includes(authedUser)))
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
    answeredQuestions: answeredQuestions,
    unAnsweredQuestions: unAnsweredQuestions,
  }
}

export default connect(mapStateToProps)(Home)