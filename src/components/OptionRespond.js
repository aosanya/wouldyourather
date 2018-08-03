import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class OptionRespond extends Component {

  handleChange(event) {
    console.log(event.target.checked);
  }

  render() {
    const  {option, isSelected, isAnswered }  = this.props
    const checkboxValue = isSelected ? 'checked' : ''
    const checkboxStlye = !isSelected && isAnswered ? 'unchecked' : checkboxValue
    if (option === null) {
      return <p>Unable to find this option</p>
    }

    return (
        <div className='question-option' >
          <span className={`question-checkbox ${checkboxStlye}`}>
            <input  type='checkbox' defaultChecked={checkboxValue} disabled={isAnswered} onChange={this.handleChange}></input>
          </span>
          {option.option}
        </div>
    )
  }
}

function mapStateToProps ({questions, authedUser}, { questionId, option }) {
    const question = questions[questionId]
    const authedUserId = authedUser.split('"').join('')
    let isSelected =  question.replies[authedUserId] === option.id
    let isAnswered =  question.replies[authedUserId] !== undefined
    return {
        option: option ? option : null,
        isSelected : isSelected,
        isAnswered : isAnswered,
    }
}

export default withRouter(connect(mapStateToProps)(OptionRespond))