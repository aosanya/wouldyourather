import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
//App Actions
import { handleUsers } from '../actions/shared'
import { setAuthedUser } from '../actions/authedUser'
//End App Actions
import './../styles/public.css';

class Login extends Component {


  componentDidMount() {
      this.props.dispatch(handleUsers())
  }

  onChange = (event) => {
    console.log("doing login")
    localStorage.setItem('user', JSON.stringify(event.target.value))
    const AUTHED_ID = localStorage.getItem('user')
    this.props.dispatch(setAuthedUser(AUTHED_ID))
    this.props.history.push('/myquestions')
  }

  render() {
    const { loading, userIds } = this.props


    return (
        <Fragment>
            {loading === 0
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
    loading : console.log(Object.keys(users).length) === 0,
    userIds: Object.keys(users)
      .sort((a,b) => users[b].name - users[a].name)
  }
}

export default connect(mapStateToProps)(Login)