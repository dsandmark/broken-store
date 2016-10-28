import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Performance extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('switches')
          break
        case Keys.right:
          this.props.router.push('reusable-components')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>Performance</p>
    )
  }
}

export default keydown(Performance)
