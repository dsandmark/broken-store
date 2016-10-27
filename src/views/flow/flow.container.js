import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import Flow from './flow.component'

class FlowContainer extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.right:
          this.props.router.push('switches')
          break
        case Keys.left:
          this.props.router.push('/')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <Flow />
    )
  }
}

export default keydown(FlowContainer)
