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
    this.props.dispatch(handleGetMyQuestions(this.props.authedUserId))
   }


  render() {
    const  myQuestions   = this.props.myQuestions
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

function mapStateToProps ({ myQuestions, authedUser }) {
  var thisQuestions = undefined
  if (myQuestions !== null){
    thisQuestions = Object.values(myQuestions)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)
  }

  return {
    authedUserId: authedUser,
    myQuestions: Object.values(thisQuestions)
  }
}

export default connect(mapStateToProps)(Nav)
