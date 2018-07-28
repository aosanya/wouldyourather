import './../styles/App.css';
import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router,
        Route,
        Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
//App Actions
import { handleInitialData, handleAuthedUser } from '../actions/shared'
//End App Actions
//App Components
import AnswerQuestions from './AnswerQuestions'
import Dashboard from './Dashboard'
import LeaderBoard from './LeaderBoard'
import MyInterests from './MyInterests'
import MyQuestions from './MyQuestions'
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
    this.props.dispatch(handleAuthedUser())
  }

  toggleMenu = (e, id) => {
    e.preventDefault()
    //this.props.history.push(`/tweet/${id}`)
    console.log('toggle Menu')
  }


  render() {
    const {isLoading, isAuthenticated} = this.props
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
            {isLoading === true
            ? `Loading...`
            :(
              <Router>
                  <Fragment>
                    <Route path='/login' exact component={Login} />
                    <Route path='/logout' component={LogOut} />
                    <PrivateRoute path='/' exact isAuthenticated={isAuthenticated} component={Dashboard} />
                    <PrivateRoute path='/myquestions' isAuthenticated={isAuthenticated} component={MyQuestions} />
                    <PrivateRoute path='/answerquestions' isAuthenticated={isAuthenticated} component={AnswerQuestions} />
                    <PrivateRoute path='/myinterests' isAuthenticated={isAuthenticated} component={MyInterests} />
                    <PrivateRoute path='/leaderboard' isAuthenticated={isAuthenticated} component={LeaderBoard} />
                  </Fragment>
              </Router>)
            }
      </Fragment>
    )
  }
}


function mapStateToProps ({ authedUserId }) {
  var isAuthenticated = false

  if (authedUserId !== null){
    isAuthenticated = authedUserId !== ''
  }
  return {
    isLoading: authedUserId === null,
    isAuthenticated : isAuthenticated,
  }
}

export default connect(mapStateToProps)(App)
