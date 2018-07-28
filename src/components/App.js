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
    const {isAuthenticated} = this.props

    const PrivateRoute = ({ component: Component, ...rest }) => (
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
      <Router>
          <Fragment>
            <Route path='/login' exact component={Login} />
            <Route path='/logout' component={LogOut} />
            <PrivateRoute path='/' exact component={Dashboard} />
            <PrivateRoute path='/myquestions' component={MyQuestions} />
            <PrivateRoute path='/answerquestions' component={AnswerQuestions} />
            <PrivateRoute path='/myinterests' component={MyInterests} />
            <PrivateRoute path='/leaderboard' component={LeaderBoard} />
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

export default connect(mapStateToProps)(App)
