import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../services/utils/helpers'
import { Link, withRouter } from 'react-router-dom'
import OptionRespond from './OptionRespond'


class QuestionRespond extends Component {

  render() {
    const { question } = this.props

    if (question === null) {
      return <p>This Question doesn't exist</p>
    }


    const {optionOne, optionTwo} = question

    return (
        <div className='question'>
            <div className='question-info'>
              Would You Rather :
              <OptionRespond key='optionOne' question = {question} id='optionOne' option={optionOne}/>
              <OptionRespond key='optionTwo' question = {question} id='optionTwo' option={optionTwo}/>
            </div>
        </div>
    )
  }
}

function mapStateToProps ({questions}, { question }) {

  return {
    question: question
      ? formatQuestion(question)
      : null
  }
}

export default withRouter(connect(mapStateToProps)(QuestionRespond))