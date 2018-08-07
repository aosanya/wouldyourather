import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionDisplay from './QuestionRespond'
import ContentWrapper from './ContentWrapper'

class Question extends Component {
  render() {
    const { question_id } = this.props

    return (
      <ContentWrapper>
        <div className="panel">
          <img
            src={avatar}
            alt={`Avatar of ${name}`}
            className='avatar'
          />
            Testing { question_id }
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ users, questions }, props) {
  const { question_id } = props.match.params
  const question = questions[question_id]
  const user = users[question.author]
  return {
    question_id,
    question : question,
    user : user,
  }
}

export default connect(mapStateToProps)(Question)