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
          Since my interview
        </h1>

        <h2 className='slide-subtitle'>Back then</h2>
        <p className='slide-paragraph'>React & Redux concepts on whiteboard</p>

        <h2 className='slide-subtitle'>Check-in task</h2>
        <p className='slide-paragraph'>Introduction to React & Redux through the medium of some kind of prototype</p>

        <h2 className='slide-subtitle'>Now showing</h2>
        <p className='slide-paragraph'>Interactive Slide Show made with React & Redux</p>
      </div>
    )
  }
}

export default keydown(Welcome)
