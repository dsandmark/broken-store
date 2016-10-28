import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Thanks extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('final-recap')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>Thank You</p>
    )
  }
}

export default keydown(Thanks)
