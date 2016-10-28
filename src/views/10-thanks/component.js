import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Thanks extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('final-recap')
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
          Thank you - Questions?
        </h1>

        <p className='slide-paragraph'><small>Images from https://css-tricks.com/learning-react-redux</small></p>
        <p className='slide-paragraph'><small>Source code for this app: https://github.com/dsandmark/redux-tech-demo</small></p>
      </div>
    )
  }
}

export default keydown(Thanks)
