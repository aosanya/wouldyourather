import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionRespond from './QuestionRespond'
import ContentWrapper from './ContentWrapper'

class AnswerQuestions extends Component {
  render() {
    console.log(this.props.questionIds)
    return (
      <ContentWrapper>
        <div className="myquestions">
            <ul className='dashboard-list'>
              {this.props.questionIds.map((id) => (
                <li key={id}>
                  <QuestionRespond id={id}/>
                </li>
              ))}
            </ul>
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(AnswerQuestions)