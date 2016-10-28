import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class ReduxUnidirectionalFlow extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('react-redux-connection')
          break
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
      <p>ReduxUnidirectionalFlow</p>
    )
  }
}

export default keydown(ReduxUnidirectionalFlow)
