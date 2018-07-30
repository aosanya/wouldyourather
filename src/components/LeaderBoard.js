import React, { Component } from 'react'
import ContentWrapper from './ContentWrapper'
import { connect } from 'react-redux'
//App Actions
import { handleGetLeaderBoard } from '../actions/shared'
//End App Actions
import './../styles/public.css';

class LeaderBoard extends Component {
  componentDidMount() {
      this.props.dispatch(handleGetLeaderBoard())
  }

  render() {
    return (
      <ContentWrapper>
        <div className="leaderboard">
            LeaderBoard here
        </div>
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({ leaderBoard }) {
  console.log(leaderBoard)
  return {
    loading : leaderBoard === null,
  }
}

export default connect(mapStateToProps)(LeaderBoard)