import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FirstOverview extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('conclusion')
          break
        case Keys.right:
          this.props.router.push('first-recap')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>FirstOverview</p>
    )
  }
}

export default keydown(FirstOverview)
