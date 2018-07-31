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
    const {isLoading, leaderBoard} = this.props
    return (
      <ContentWrapper>
        {/* {isLoading === true
            ? `Loading...`
            :(<div className='leaderboard'>
                {leaderBoard.map((user) => (
                    <div>
                      {user.name}
                    </div>
                ))}
              </div>
        )} */}
      </ContentWrapper>
    )
  }
}

function mapStateToProps ({leaderBoard}) {
  console.log(leaderBoard)
  return {
    loading : leaderBoard === null,
    leaderBoard : leaderBoard,
  }
}

export default connect(mapStateToProps)(LeaderBoard)