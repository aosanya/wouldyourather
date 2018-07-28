import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <div id="sidebar-wrapper">
      <ul id="sidebar_menu" className="sidebar-nav">
          <li className="sidebar-brand"><a id="menu-toggle" onClick={(e) => this.toggleMenu(e)}>Menu<span id="main_icon" className="glyphicon glyphicon-align-justify"></span></a></li>
      </ul>
      <ul className="sidebar-nav" id="sidebar">
        <li className="sidebar-item" >
          <Link to={`/myquestions`}>My Questions<span className="sub_icon glyphicon glyphicon-link"></span></Link>
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