import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
//App Actions
import { handleGetUsers } from '../services/users/api'
import { handleSetAuthedUser } from '../services/session/api'
//End App Actions
import './../styles/public.css';

class Login extends Component {


  componentDidMount() {
      this.props.dispatch(handleGetUsers())
  }

  onChange = (event) => {
    this.props.dispatch(handleSetAuthedUser(event.target.value))
    console.log(this.props)
    const to = this.props.location.state !== undefined && this.props.location.state.from !== undefined ? this.props.location.state.from.pathname : '/'
    this.props.history.push(to)
  }

  render() {
    const { loading, userIds } = this.props

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

function mapStateToProps ({ users }) {
  return {
    loading : users === null,
    userIds: Object.keys(users)
      .sort((a,b) => users[b].name - users[a].name)
  }
}

export default connect(mapStateToProps)(Login)