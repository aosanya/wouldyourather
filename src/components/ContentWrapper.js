import React, { Component, Fragment  } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'

class ContentWrapper extends Component {
  render() {
    const { user } =  this.props
    return (
      <Fragment>
        {this.props.loading === true
        ? null
        : <div id="wrapper" className="active">
            <div className="siteHeader">
              <div className="info right">
                You are logged in as <span className="emphasis">{user.name}</span>
              </div>
            </div>

            <Nav/>
            <div id="page-content-wrapper">
              <div className="page-content inset">
                <div className="row">
                  <div className="col-md-12">
                    {this.props.children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users, fetchingData }) {
  const user = users[authedUser]
  return {
    loading : fetchingData,
    user : user,
  }
}

export default connect(mapStateToProps)(ContentWrapper)