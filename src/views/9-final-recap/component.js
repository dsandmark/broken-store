import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FinalRecap extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('reusable-components')
          break
        case Keys.right:
          this.props.router.push('thanks')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>FinalRecap</p>
    )
  }
}

export default keydown(FinalRecap)
