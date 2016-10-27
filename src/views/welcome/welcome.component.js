import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Welcome extends Component {
  
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.right:
          this.props.router.push('switches')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    )
  }
}

export default keydown(Welcome)
