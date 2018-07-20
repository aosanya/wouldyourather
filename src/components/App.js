import React, { Component } from 'react'

import './../App.css';

// import 'jquery/dist/jquery.min'
// import 'bootstrap/dist/js/bootstrap.min'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
//App Components
import Nav from './Nav'
import AnswerQuestions from './AnswerQuestions'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import LogOut from './LogOut'
import MyInterests from './MyInterests'
import MyQuestions from './MyQuestions'
//End App Components

class App extends Component {
  state = {
    showingMenu: false
  }


  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  toggleMenu = (e, id) => {
    e.preventDefault()
    //this.props.history.push(`/tweet/${id}`)
    console.log('toggle Menu')
  }
  render() {
    return (
      <Router>
        {/* <Fragment> */}
        <div id="wrapper" className="active">
            <Nav/>
            <div id="page-content-wrapper">
              <div className="page-content inset">
                <div className="row">
                    <div className="col-md-12">
                      {this.props.loading === true
                      ? null
                      : <div>
                          <Route path='/' exact component={Dashboard} />
                          <Route path='/myquestions' component={MyQuestions} />
                          <Route path='/answerquestions' component={AnswerQuestions} />
                          <Route path='/myinterests' component={MyInterests} />
                          <Route path='/leaderboard' component={LeaderBoard} />
                          <Route path='/logout' component={LogOut} />
                        </div>}
                    </div>
                </div>
              </div>
            </div>
            </div>
          {/* </Fragment> */}
      </Router>
    )
  }
}


function mapStateToProps ({ model }) {
  return {
    loading: model === null
  }
}

export default connect(mapStateToProps)(App)
