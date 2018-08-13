import React from 'react'
import ContentWrapper from './ContentWrapper'

const Error404 = props => {
  const  info = props.info || 'Sorry, page does not exist'
  return (
    <ContentWrapper>
        <div className="panel">404 Error : {info}.</div>
    </ContentWrapper>
  )
}

export default Error404