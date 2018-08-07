import './../styles/App.css';
import 'react-notifications/lib/notifications.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Handlers
import { handleInitialData } from '../services/api'
import { handleGetAuthedUser } from '../services/session/api'
//End App Handlers
//App Components
import Login from './Login'
import LogOut from './LogOut'
import Home from './Home'
import MyQuestions from './MyQuestions'
import Question from './Question'
import AddQuestion from './AddQuestion'
import LeaderBoard from './LeaderBoard'
//End App Components

class App extends Component {
  state = {
    showingMenu: false,
    user: '',
  }

  componentDidMount() {
    this.props.dispatch(handleGetAuthedUser())
    this.props.dispatch(handleInitialData())
  }

  toggleMenu = (e, id) => {
    e.preventDefault()
  }

  render() {
    const {loading, isAuthenticated, authedUserId} = this.props
    const PrivateRoute = ({isAuthenticated, component: Component, ...rest }) => (
      <Route
        {...rest}
        render={({ history: { location }, match }) =>
          isAuthenticated ? (
            <Component {...this.props} match = {match}/>
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );

    return (
        <Router>
            <Fragment>
              <Route path='/login' exact component={Login} />
              <Route path='/logout' component={LogOut} />
              {this.props.loading === true
              ? null
              : <div>
                  <PrivateRoute path='/' exact isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Home} />
                  <PrivateRoute path='/myquestions' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={MyQuestions} />
                  <PrivateRoute path='/questions/:question_id' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Question} />
                  <PrivateRoute path='/add' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={AddQuestion} />
                  <PrivateRoute path='/leaderboard' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={LeaderBoard} />
                </div>
              }
            </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  var isAuthenticated = false
  var authedUserId = undefined
  if (authedUser !== null && authedUser != undefined){
    isAuthenticated = authedUser.AuthedUserId !== ''
    authedUserId = authedUser
  }
  return {
    loading : authedUser === null,
    isAuthenticated : isAuthenticated,
    authedUserId : authedUserId,
  }
}

export default connect(mapStateToProps)(App)
