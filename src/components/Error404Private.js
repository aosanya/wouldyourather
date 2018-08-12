import React, { PureComponent } from 'react'
import ContentWrapper from './ContentWrapper'

class Error404 extends PureComponent {
  render() {
    const  info = this.props.info || 'Sorry, page does not exist'
    return (
      <ContentWrapper>
          <div className="panel">404 Error : {info}.</div>
      </ContentWrapper>
    )
  }
}

export default Error404