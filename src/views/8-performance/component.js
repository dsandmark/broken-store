import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class Performance extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('switches')
          break
        case Keys.right:
          this.props.router.push('reusable-components')
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
          Performance
        </h1>

        <h2 className='slide-subtitle'>DOM</h2>
        <p className='slide-paragraph'>API to manipulate an HTML website</p>

        <h2 className='slide-subtitle'>Virtual DOM</h2>
        <p className='slide-paragraph'>In-memory representation of DOM</p>

        <h2 className='slide-subtitle'>React Performance</h2>
        <p className='slide-paragraph'>Diff between its virtual DOM and real DOM - only update necessary nodes</p>
        <p className='slide-paragraph'>Batch Updates</p>
      </div>
    )
  }
}

export default keydown(Performance)
