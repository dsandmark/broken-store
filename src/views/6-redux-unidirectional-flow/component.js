import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import unidirectionalFlowImage from '../../resources/images/unidirectional-flow.svg'

class ReduxUnidirectionalFlow extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('react-redux-full-flow')
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
      <div className='slide-container'>
        <h1 className='slide-title'>
          Redux Unidirectional flow
        </h1>

        <img src={unidirectionalFlowImage} alt='Unidirectional flow' />

      </div>
      
    )
  }
}

export default keydown(ReduxUnidirectionalFlow)
