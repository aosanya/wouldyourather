import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
//App Actions
import { handleUsers } from '../actions/shared'
//End App Actions

import { BrowserRouter as
    Redirect,} from 'react-router-dom'
import './../styles/public.css';
class Login extends Component {
  state = {
    redirectToReferrer: false
  }

  componentDidMount() {
      this.props.dispatch(handleUsers())
  }

  onChange = (event) => {
    localStorage.setItem('user', JSON.stringify(event.target.value))
    this.setState({ redirectToReferrer: true })
  }

  render() {
    const { loading, userIds } = this.props
    const { from } = { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    console.log(this.props.location.state)
    console.log(from)

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
        <Fragment>
            {loading === 0
            ? `Loading users`
            :(
              <div className="login">
                  <div className="user-select" key="use-select">
                      {`Select User : `}
                      <select onChange={this.onChange}>
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