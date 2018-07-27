import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Actions
import { handleInitialData, handleAuthedUser } from '../actions/shared'
//End App Actions
//App Components
import Nav from './Nav'
import AnswerQuestions from './AnswerQuestions'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import MyInterests from './MyInterests'
import MyQuestions from './MyQuestions'
import LogOut from './LogOut'
import Login from './Login'
//End App Components

class SecuredContent extends Component {
  state = {
    showingMenu: false,
    user: '',
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData())
    this.props.dispatch(handleAuthedUser())
  }

  toggleMenu = (e, id) => {
    e.preventDefault()
    //this.props.history.push(`/tweet/${id}`)
    console.log('toggle Menu')
  }
  render() {
    const {isAuthenticated} = this.props
    console.log(isAuthenticated)
    return (
      <Router>
       <Fragment>
            <Route path='/logout' component={LogOut} />
            { isAuthenticated === false
            ? (
              <Fragment>
                  <Route path='/login' exact component={Login} />
                  <Redirect
                      to={{
                          pathname: "/login",
                          state: { from: this.props.location }
                      }}
                  />
              </Fragment>)
            :(
              <Fragment>
                <Nav/>
                <div id="page-content-wrapper">
                  <div className="page-content inset">
                    <div className="row">
                        <div className="col-md-12">
                            <Route path='/' exact component={Dashboard} />
                            <Route path='/myquestions' component={MyQuestions} />
                            <Route path='/answerquestions' component={AnswerQuestions} />
                            <Route path='/myinterests' component={MyInterests} />
                            <Route path='/leaderboard' component={LeaderBoard} />

                        </div>
                    </div>
                  </div>
                </div>
            </Fragment>)}
          </Fragment>
      </Router>
    )
  }
}


function mapStateToProps ({ authedUser }) {
  return {
    isAuthenticated: authedUser !== null
  }
}

export default connect(mapStateToProps)(SecuredContent)
