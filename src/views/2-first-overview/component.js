import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FirstOverview extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('conclusion')
          break
        case Keys.right:
          this.props.router.push('first-recap')
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
          Overview
        </h1>

        <h2 className='slide-subtitle'>
          Who I am
        </h2>
        <p className='slide-paragraph'>Six years of front & back end web dev / Spotify & McKinsey</p>

        <h2 className='slide-subtitle'>
          What I am showing
        </h2>
        <p className='slide-paragraph'>React - Javascript library for building user interfaces</p>
        <p className='slide-paragraph'>Redux - Predictable state container for javascript apps</p>

        <h2 className='slide-subtitle'>
          Why React & Redux
        </h2>
        <p className='slide-paragraph'>Scales - Unidirectional flow</p>
        <p className='slide-paragraph'>Performance - Virtual DOM</p>
        <p className='slide-paragraph'>Quick development - Reusable components</p>
      </div>
    )
  }
}

export default keydown(FirstOverview)
