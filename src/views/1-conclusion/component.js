import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Conclusion extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.right:
          this.props.router.push('first-overview')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <p>Conclusion</p>
    )
  }
}

export default keydown(Conclusion)
