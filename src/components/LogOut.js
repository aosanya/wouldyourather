import React, { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class LogOut extends Component {
  render() {
    this.props.dispatch(setAuthedUser(null))
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