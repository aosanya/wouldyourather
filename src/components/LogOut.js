import React, { Component } from 'react'
import { setAuthedUser } from '../services/session/actions'
import { logOut } from '../actions/logout'
import { Redirect } from 'react-router'

import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class LogOut extends Component {
  componentDidMount(){
    this.props.dispatch(setAuthedUser(null))
    this.props.dispatch(logOut())
    this.props.history.index=0
  }


  render() {


    return (
        <div className="logout">
            You have been logged out. <NavLink to={`/login`}>Login here</NavLink>
        </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null
  }
}

export default connect(mapStateToProps)(LogOut)