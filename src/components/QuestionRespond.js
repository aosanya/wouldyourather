import React, { Component } from 'react'
import OptionRespond from './OptionRespond'

class QuestionRespond extends Component {
    state = {
        isDeactivated: false,
    }

    deactivate = (e) => {
        this.setState(() => ({
            isDeactivated : true
        }))
      }
    render() {
        const { formatedQuestion } = this.props
        return (
            <div className='question-info'>
                Would You Rather?
                <OptionRespond key='optionOne' question = {formatedQuestion} id='optionOne' isDeactivated={this.state.isDeactivated} option={formatedQuestion.optionOne} deactivator={this.deactivate} />
                <OptionRespond key='optionTwo' question = {formatedQuestion} id='optionTwo' isDeactivated={this.state.isDeactivated} option={formatedQuestion.optionTwo} deactivator={this.deactivate}/>
            </div>
        )
    }
}

export default QuestionRespond