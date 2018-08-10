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
            <li className="sidebar-brand"><a id="menu-toggle" onClick={(e) => this.toggleMenu(e)}>Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
        </ul>
        <ul className="sidebar-nav" id="sidebar">
          <li className="sidebar-item" >
            <Link to={`/`}>Home<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/vote`}>Vote<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/myquestions`}>My Questions{myQuestionsCount}<span className="sub_icon glyphicon glyphicon-link"></span></Link>
          </li>
          <li className="sidebar-item" >
            <Link to={`/add`}>Add Question<span className="sub_icon glyphicon glyphicon-link"></span></Link>
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
