import React, { Component } from 'react'


import './../styles/App.css';

//App Components
import SecuredContent from './SecuredContent'
//End App Components

class App extends Component {
  state = {
    userId : ''
  }

  render() {
    return (
      <div id="wrapper" class="active">
        <SecuredContent userId={this.state.userId}/>
      </div>
    )
  }
}

export default App


