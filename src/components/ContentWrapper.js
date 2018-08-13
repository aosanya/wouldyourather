import React, { Component, Fragment  } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { handleInitialData } from '../services/api'

class ContentWrapper extends Component {

  componentDidMount(){
    if (this.props.needsFetching) this.props.dispatch(handleInitialData())
  }

  render() {
    const { user } =  this.props
    return (
      <Fragment>
        <div id="wrapper" className="active">
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
                    {this.props.loading === true
                    ? null
                    :
                      this.props.children
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>

      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser, users, fetchingData, fetchedData }) {
  const user = users[authedUser]
  return {
    loading : fetchingData,
    needsFetching : !fetchingData && !fetchedData === true,
    user : user,
  }
}

export default connect(mapStateToProps)(ContentWrapper)