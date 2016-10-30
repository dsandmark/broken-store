import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Welcome extends Component {
  
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.right:
          this.props.router.push('conclusion')
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
          Interactive Slide Show
        </h1>

        <p className='slide-paragraph'>Since my last interview</p>
      </div>
    )
  }
}

export default keydown(Welcome)
