import './../styles/App.css';
import 'react-notifications/lib/notifications.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Actions
import { handleGetQuestions } from '../services/poll/questions/api'
//End App Actions
//App Components
import Login from './Login'
import LogOut from './LogOut'
import Home from './Home'
import MyQuestions from './MyQuestions'
import AddQuestion from './AddQuestion'
import LeaderBoard from './LeaderBoard'
//End App Components

class App extends Component {
  state = {
    showingMenu: false,
    user: '',
  }

  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
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
              <PrivateRoute path='/' exact isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={Home} />
              <PrivateRoute path='/myquestions' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={MyQuestions} />
              <PrivateRoute path='/add' isAuthenticated={isAuthenticated} authedUserId={authedUserId} component={AddQuestion} />
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
