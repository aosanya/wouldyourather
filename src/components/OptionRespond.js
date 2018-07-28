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
        <div className='question-option'>
          <span className='question-checkbox'>
            <input  type='checkbox'></input>
          </span>
          {option.option}
        </div>
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