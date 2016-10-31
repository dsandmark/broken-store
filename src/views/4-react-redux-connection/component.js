import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import actionFlowImage from '../../resources/images/action-flow.svg'

class ReactReduxConnection extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('first-recap')
          break
        case Keys.right:
          this.props.router.push('react-redux-full-flow')
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
          Connecting React & Redux
        </h1>

        <h2 className='slide-subtitle'>Redux store</h2>
        <p className='slide-paragraph'>State</p>
        <p className='slide-paragraph'>Dispatch action to modify state</p>
        <img src={actionFlowImage} alt='Action flow' width='600' />

        <h2 className='slide-subtitle'>React Component</h2>
        <p className='slide-paragraph'>Subscribes to Redux state changes</p>

      </div>
    )
  }
}

export default keydown(ReactReduxConnection)
