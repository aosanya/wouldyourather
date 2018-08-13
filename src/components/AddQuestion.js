import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import ContentWrapper from './ContentWrapper'
import { handleAddQuestion, handleGetQuestions } from '../services/poll/questions/api'

class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    returnHome : false,
  }

  handleChange = (e) => {
    const value = e.target.value
    e.target.id === 'option1' && this.setState(() => ({ optionOneText: value}))
    e.target.id === 'option2' && this.setState(() => ({ optionTwoText: value}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { optionOneText, optionTwoText } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion(optionOneText, optionTwoText ))

    this.setState(() => ({
        optionOneText: '',
        optionTwoText: '',
    }))

    this.props.dispatch(handleGetQuestions(this.props.authedUserId))

    this.setState(() => ({
        returnHome : true,
    }))

    //NotificationManager.success('', 'Poll question added successfully')
    //
    //this.props.history.push('/')
  }

  render() {
    const { optionOneText, optionTwoText} = this.state

    const option1Left = 280 - optionOneText.length
    const option2Left = 280 - optionTwoText.length
    return (
        <Fragment>
            { this.state.returnHome ?
                <Redirect
                to={{
                    pathname: "/",
                }}
                />
            :
                <ContentWrapper>
                    <div className='contentBox'>
                        <div className='question-info'>
                            Would You Rather :
                            <form onSubmit={this.handleSubmit}>
                            <div>
                                <textarea
                                    id='option1'
                                    placeholder="Enter Option 1"
                                    value={optionOneText}
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
                                    value={optionTwoText}
                                    onChange={this.handleChange}
                                    className='question-option'
                                    maxLength={28}
                                />
                                {option2Left <= 100 && (<div className='tweet-length'>{option1Left}</div>)}
                            </div>

                            <button
                                className='btn'
                                type='submit'
                                disabled={optionOneText === '' || optionTwoText === ''}>
                                Submit
                            </button>
                            </form>
                        </div>
                    </div>
                </ContentWrapper>
            }
         </Fragment>
    )
  }
}

function mapStateToProps ({authedUser}) {
    return {
         authedUserId : authedUser
    }
}

export default connect(mapStateToProps)(AddQuestion)