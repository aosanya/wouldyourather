import React, { Component } from 'react'
import { logOut } from '../services/session/actions'
import { handleSetAuthedUser } from '../services/session/api'
import { fetchingData } from '../services/status/actions'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class LogOut extends Component {
  componentDidMount(){
    this.props.dispatch(handleSetAuthedUser(null))
    this.props.dispatch(logOut())
    this.props.dispatch(fetchingData(false))
    this.props.history.index=0
  }

  render() {
    return (
        <div className="logout">
            You have successfully logged out.&nbsp;<Link to={`/login`}>Login here</Link>
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