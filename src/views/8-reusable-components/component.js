import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class ReusableComponents extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('performance')
          break
        case Keys.right:
          this.props.router.push('final-recap')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>ReusableComponents</p>
    )
  }
}

export default keydown(ReusableComponents)
