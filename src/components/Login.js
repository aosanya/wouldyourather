import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
//App handlers
import { handleGetUsers } from '../services/users/api'
import { handleSetAuthedUser } from '../services/session/api'
//End App handlers
import './../styles/public.css';

class Login extends Component {
  state = {
    returnUrl: undefined,
  }

  componentDidMount() {
      this.props.dispatch(handleGetUsers())
  }

  onChange = (event) => {
    this.props.dispatch(handleSetAuthedUser(event.target.value))
  }

  render() {
    const { loading, userIds, isAuthenticated } = this.props

    if (isAuthenticated) {
      const to = this.props.location.state !== undefined && this.props.location.state.from !== undefined ? this.props.location.state.from.pathname : '/'
      this.props.history.push(to)
    }

    return (
        <Fragment>
            {loading === true
            ? `Loading users`
            :(
              <div className="login">
                  <div className="user-select" key="use-select">
                      <select defaultValue="" onChange={this.onChange}>
                      <option value="" disabled>Select user...</option>
                      {userIds.map((user) => (
                          <option value={user} key={user}>{user}</option>
                      ))}
                      </select>
                  </div>
              </div>
            )
            }
         </Fragment>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  var isAuthenticated = false
  var authedUserId = undefined
  if (authedUser !== '' && authedUser !== undefined && authedUser !== null){
    isAuthenticated = authedUser.AuthedUserId !== ''
    authedUserId = authedUser
  }
  return {
    loading : users === null,
    isAuthenticated : isAuthenticated,
    authedUserId : authedUserId,
    userIds: Object.keys(users)
      .sort((a,b) => users[b].name - users[a].name)
  }
}

export default connect(mapStateToProps)(Login)