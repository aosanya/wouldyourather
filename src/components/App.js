import './../styles/App.css';
import 'react-notifications/lib/notifications.css';
import React, { Component, Fragment } from 'react'
import { Switch } from 'react-router'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Handlers
import { handleInitialData } from '../services/api'
//End App Handlers
//App Components
import Error404 from './Error404'
import Error404Private from './Error404Private'
import Login from './Login'
import LogOut from './LogOut'
import Home from './Home'
import Vote from './Vote'
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
                { loading ? null :
                 <Switch>
                  <Route path='/login' component={Login} />
                  <Route path='/logout' component={LogOut} />
                  <PrivateRoute path='/' exact isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Home} />
                  <PrivateRoute path='/vote' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Vote} />
                  <PrivateRoute path='/myquestions' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={MyQuestions} />
                  <PrivateRoute path='/questions/:question_id' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Question} />
                  <PrivateRoute path='/add' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={AddQuestion} />
                  <PrivateRoute path='/leaderboard' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={LeaderBoard} />
                  { isAuthenticated ? <Route component={Error404Private}/> : <Route component={Error404}/>}
                 </Switch>
                }
            </Fragment>
        </Router>
    )
  }
}

function mapStateToProps ({ authedUser, fetchingData }) {
  var isAuthenticated = false
  var authedUserId = undefined
  if (fetchingData === false && authedUser !== undefined && authedUser !== null){
    isAuthenticated = authedUser !== ''
    authedUserId = authedUser
  }
  return {
    loading : fetchingData,
    isAuthenticated : isAuthenticated,
    authedUserId : authedUserId,
  }
}

export default connect(mapStateToProps)(App)
