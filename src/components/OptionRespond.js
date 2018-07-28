import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'


class OptionRespond extends Component {

  render() {
    const { option } = this.props

    if (option === null) {
      return <p>Unable to find this option</p>
    }

    return (
      <span>
        <input type='checkbox'></input>
        <span className='question-option'>{option.option}</span>
      </span>
    )
  }
}

function mapStateToProps ({questions}, { questionId, option }) {
    const question = questions[questionId]
    return {
        option: option ? option : null,
    }
}

export default withRouter(connect(mapStateToProps)(OptionRespond))