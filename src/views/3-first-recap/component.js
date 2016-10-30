import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FirstRecap extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('first-overview')
          break
        case Keys.right:
          this.props.router.push('react-redux-connection')
          break
        default:
          break
      }
    }
  }

  render() {
    return (
      <div className='slide-container'>
        <h1 className='slide-title'>
          Let's make it clear
        </h1>

        <h2 className='slide-subtitle'>React</h2>
        <p className='slide-paragraph'>Web Components</p>

        <h2 className='slide-subtitle'>Redux</h2>
        <p className='slide-paragraph'>Manage App State</p>
      </div>
    )
  }
}

export default keydown(FirstRecap)
