import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import reactReduxFullFlowImage from '../../resources/images/react-redux-full-flow.svg'

class ReactReduxFullFlow extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('react-redux-connection')
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
      <div className='slide-container'>
        <h1 className='slide-title'>
          React & Redux - Full Flow
        </h1>

        <img src={reactReduxFullFlowImage} alt='Action flow' width='600' />
      </div>
    )
  }
}

export default keydown(ReactReduxFullFlow)
