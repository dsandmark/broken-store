import React, { Component } from 'react'
import { Link } from 'react-router'
import logo from '../../resources/images/logo.svg'
import './app.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
          <h2>Dennis Sandmark + React + Redux</h2>
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default App
