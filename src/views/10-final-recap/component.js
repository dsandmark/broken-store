import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'

class FinalRecap extends Component {
  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('reusable-components')
          break
        case Keys.right:
          this.props.router.push('thanks')
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
          Sum it up
        </h1>

        <h2 className='slide-subtitle'>Scales</h2>
        <p className='slide-paragraph'>Unidirectional flow</p>

        <h2 className='slide-subtitle'>Performant</h2>
        <p className='slide-paragraph'>Virtual DOM</p>

        <h2 className='slide-subtitle'>Quick development</h2>
        <p className='slide-paragraph'>Reusable components</p>
      </div>
    )
  }
}

export default keydown(FinalRecap)
