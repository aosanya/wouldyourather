import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Error404 extends PureComponent {
  render() {
    return (
        <span className="logout">404 Error : Please&nbsp;<Link to={`/login`}>login here</Link>&nbsp;to get additional assistance.</span>
    )
  }
}

export default Error404