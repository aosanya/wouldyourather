import React, { Component, Fragment  } from 'react'
import Nav from './Nav'

class ContentWrapper extends Component {
  render() {
    return (
      <Fragment>
        <div id="wrapper" className="active">
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
      </Fragment>
    )
  }
}

export default ContentWrapper