import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

import ItemContainer from './item.container'
import ToggleAllContainer from './toggle-all.container'

class Switches extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('redux-unidirectional-flow')
          break
        case Keys.right:
          this.props.router.push('performance')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <div>
        <ItemContainer />
        <ToggleAllContainer />
      </div>
    ) 
  }
}

export default keydown(Switches)
