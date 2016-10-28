import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import '../common.css'

class Conclusion extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('/')
          break
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
      <div className='slide-container'>
        <h1 className='slide-title'>
          Conclusion
        </h1>

        <h2 className='slide-paragraph'>
          You should use React & Redux for web development
        </h2>
      </div>
    )
  }
}

export default keydown(Conclusion)
