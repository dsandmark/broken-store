import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class ReactReduxConnection extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('first-recap')
          break
        case Keys.right:
          this.props.router.push('redux-unidirectional-flow')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>ReactReduxConnection</p>
    )
  }
}

export default keydown(ReactReduxConnection)
