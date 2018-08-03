import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import { handleAddQuestion } from '../actions/questions'
import {NotificationContainer, NotificationManager} from 'react-notifications';

class AddQuestion extends Component {
  state = {
    option1: '',
    option2: '',

  }

  handleChange = (e) => {
    const value = e.target.value
    e.target.id === 'option1' && this.setState(() => ({ option1: value}))
    e.target.id === 'option2' && this.setState(() => ({ option2: value}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { option1, option2 } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(option1, option2 ))

    this.setState(() => ({
      option1: '',
      option2: '',

    }))

    NotificationManager.success('', 'Poll question added successfully')
  }

  render() {
    const { option1, option2, toHome } = this.state

    const option1Left = 280 - option1.length
    const option2Left = 280 - option2.length
    console.log(this.props)
    return (
        <ContentWrapper>
            <div className='contentBox'>
                <div className='question-info'>
                    Would You Rather :
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <textarea
                            id='option1'
                            placeholder="Enter Option 1"
                            value={option1}
                            onChange={this.handleChange}
                            className='question-option'
                            maxLength={280}
                        />
                        {option1Left <= 100 && (<div className='tweet-length'>{option1Left}</div>)}
                    </div>
                    <div>
                        <textarea
                            id='option2'
                            placeholder="Enter Option 2"
                            value={option2}
                            onChange={this.handleChange}
                            className='question-option'
                            maxLength={28}
                        />
                        {option2Left <= 100 && (<div className='tweet-length'>{option1Left}</div>)}
                    </div>

                    <button
                        className='btn'
                        type='submit'
                        disabled={option1 === '' || option2 === ''}>
                        Submit
                    </button>
                    </form>
                </div>
            </div>
            <NotificationContainer/>
        </ContentWrapper>
    )
  }
}

function mapStateToProps ({state, question}) {
    return {
      addedQuestion : question
    }
  }

  export default connect(mapStateToProps)(AddQuestion)