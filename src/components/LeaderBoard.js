import React, { Component } from 'react'
import ContentWrapper from './ContentWrapper'
import { connect } from 'react-redux'
//App Actions
import { handleGetLeaderBoard } from '../services/poll/leaderBoard/api'
//End App Actions
import './../styles/public.css';

class LeaderBoard extends Component {
  componentDidMount() {
      this.props.dispatch(handleGetLeaderBoard())
  }

  isAlternating = (index) => {
    return index % 2 === 0
  }

  render() {
    const { leaderBoard, loading } = this.props
    return (
      <ContentWrapper>
        {loading ? null
        :
          <div className='contentBox' key='leaderBoard'>
            <div className='rTable leaderBoard-info'>
              <div className="rTableRow">
              <div className="rTableHead">Position</div>
              <div className="rTableHead">Name</div>
              <div className="rTableHead">Questions</div>
              <div className="rTableHead">Replies</div>
            </div>
              {leaderBoard.map((user, index) => (
                  <div key={user.id} className={`rTableRow leaderBoard-user ${this.isAlternating(index) ? "rAlternating" : ""}`}>
                      <div className='rTableCell'>
                        {index + 1}
                        <img
                          src={user.avatar}
                          alt={`Avatar of ${user.name}`}
                          className='avatar'
                        />
                      </div>

                      <div className='rTableCell'>
                        {user.name}
                      </div>
                      <div className='rTableCell leaderBoard-questions'>
                        {user.questions}
                      </div>
                      <div className='rTableCell leaderBoard-votes'>
                        {user.replies}
                      </div>
                  </div>
              ))}
            </div>
          </div>
        }
      </ContentWrapper>
    )
  }
}

function sortBoard(user1, user2){
  if (user2.questions > user1.questions) return 1
  if ((user2.questions === user1.questions) && (user2.replies >= user1.replies)) return 1
  return 0
}

function mapStateToProps ({leaderBoard, fetchingData}) {
  var formatedBoard = undefined
  if (fetchingData === false){
    formatedBoard = Object.values(leaderBoard)
    formatedBoard = formatedBoard.sort((a,b) => sortBoard(a,b))
  }
  return {
    loading : fetchingData,
    hasBoard : Object.keys(leaderBoard).length > 0,
    leaderBoard : formatedBoard,
  }
}

export default connect(mapStateToProps)(LeaderBoard)