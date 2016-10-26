import React, { Component } from 'react'
import logo from '../../resources/images/logo.svg'
import './app.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React + Redux Tech Demo</h2>
        </div>

        {this.props.children}
      </div>
    )
  }
}

export default App
