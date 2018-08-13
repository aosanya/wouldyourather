import React, { Component } from 'react'
import { handleLogOut } from '../services/session/api'
import { handleSetAuthedUser } from '../services/session/api'
import { handleFetchingData, handleFetchedData } from '../services/status/api'

import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class LogOut extends Component {
  componentDidMount(){
    this.props.dispatch(handleSetAuthedUser(null))
    this.props.dispatch(handleLogOut())
    this.props.dispatch(handleFetchingData(false))
    this.props.dispatch(handleFetchedData(false))
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