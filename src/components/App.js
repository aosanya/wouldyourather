import './../styles/App.css';
import 'react-notifications/lib/notifications.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Actions
import { handleInitialData } from '../actions/shared'
//End App Actions
//App Components
import AnswerQuestions from './AnswerQuestions'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import MyInterests from './MyInterests'
import MyQuestions from './MyQuestions'
import AddQuestion from './AddQuestion'
import LogOut from './LogOut'
import Login from './Login'
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
    //this.props.history.push(`/tweet/${id}`)
    console.log('toggle Menu')
  }


  render() {
    const {isLoading, isAuthenticated, authedUserId} = this.props
    console.log(this.props)
    const PrivateRoute = ({isAuthenticated, component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          isAuthenticated ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );


    return (
      <Fragment>
        <Router>
            <Fragment>
              <Route path='/login' exact component={Login} />
              <Route path='/logout' component={LogOut} />
              <PrivateRoute path='/' exact isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Dashboard} />
              <PrivateRoute path='/myquestions' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={MyQuestions} />
              <PrivateRoute path='/add' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={AddQuestion} />
              <PrivateRoute path='/answerquestions' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={AnswerQuestions} />
              <PrivateRoute path='/myinterests' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={MyInterests} />
              <PrivateRoute path='/leaderboard' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={LeaderBoard} />
            </Fragment>
        </Router>
      </Fragment>
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
    isAuthenticated : isAuthenticated,
    authedUserId : authedUserId,
  }
}

export default connect(mapStateToProps)(App)
