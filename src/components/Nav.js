import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleGetMyQuestions } from '../services/poll/myQuestions/api'

class Nav extends Component {
  state = {
    authedUserId: undefined,
    questionsFetching: false,
  }

  componentDidMount() {

   }

   componentDidUpdate() {
      const { authedUserId, myQuestions }  = this.props
      if (!this.state.questionsFetching && authedUserId !== undefined){
        this.props.dispatch(handleGetMyQuestions(authedUserId))
        this.setState(() => ({
          questionsFetching: true
        }))
      }
   }

  render() {
    const { authedUserId, myQuestions }  = this.props
    const myQuestionsCount = myQuestions === undefined ? '...' : `(${myQuestions.length})`
    return (
      <div id="sidebar-wrapper">
        <ul id="sidebar_menu" className="sidebar-nav">
            <li className="sidebar-brand"><a id="menu-toggle" onClick={(e) => this.toggleMenu(e)}>Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">
          <li className="sidebar-item" >
            <Link to={`/myquestions`}>My Questions{myQuestionsCount}<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/add`}>Add Question<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/answerquestions`}>Answer Questions<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/myinterests`}>My Interests<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/leaderboard`}>Leader Board<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/logout`}>Log Out<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions }) {

  console.log(questions)
  var authedUserId = undefined
  var myQuestions = undefined



  if (authedUser !== null){
    if (authedUser.AuthedUserId !== undefined){
    const key = authedUser.AuthedUserId.split('"').join('')
    authedUserId = key
    myQuestions = Object.values(questions).filter((f) => f.author === key)
    }
  }


  return {
    authedUserId: authedUserId,
    myQuestions: myQuestions
  }
}

export default connect(mapStateToProps)(Nav)
