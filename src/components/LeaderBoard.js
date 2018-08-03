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
    const {hasBoard, leaderBoard} = this.props
    return (
      <ContentWrapper>
        <div className='contentBox'>
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
      </ContentWrapper>
    )
  }
}

function sortQuestions(user1, user2){
  return user2.questions > user1.questions
}

function sortReplies(user1, user2){
  return user2.replies > user1.replies
}

function sortBoard(user1, user2){
  return sortQuestions(user1, user2) && sortReplies(user1, user2)


}

function mapStateToProps ({leaderBoard}) {
  var formatedBoard = Object.values(leaderBoard)
  if (formatedBoard.length > 0){
    formatedBoard = formatedBoard.sort((a,b) => sortBoard(a,b))
  }
  return {
    hasBoard : Object.keys(leaderBoard).length > 0,
    leaderBoard : formatedBoard,
  }
}

export default connect(mapStateToProps)(LeaderBoard)