import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FirstRecap extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('first-overview')
          break
        case Keys.right:
          this.props.router.push('react-redux-connection')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>FirstRecap</p>
    )
  }
}

export default keydown(FirstRecap)
