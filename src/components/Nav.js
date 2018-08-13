import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Nav extends Component {

  render() {
    const  myQuestions   = this.props.myQuestions
    const myQuestionsCount = myQuestions === undefined ? '...' : `(${myQuestions.length})`
    return (
      <div id="sidebar-wrapper">
        <ul id="sidebar_menu" className="sidebar-nav">
            <li className="sidebar-brand">Menu</li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">
          <li className="sidebar-item" >
            <Link to={`/`}>Home</Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/vote`}>Vote</Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/myquestions`}>My Questions{myQuestionsCount}</Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/add`}>New Question</Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/leaderboard`}>Leader Board</Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/logout`}>Log Out</Link>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser }) {
  var thisQuestions = undefined
  if (questions !== undefined){
    thisQuestions = Object.values(questions).filter((f) => f.author === authedUser)
    //.sort((a,b) => myQuestions[b].timestamp - myQuestions[a].timestamp)
  }

  return {
    authedUserId: authedUser,
    myQuestions: Object.values(thisQuestions)
  }
}

export default connect(mapStateToProps)(Nav)
