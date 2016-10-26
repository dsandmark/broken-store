import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toggle from 'material-ui/Toggle'
import './toggle-all.css'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { TOGGLE_ALL } from '../../domain/switches/switches.reducer'

class ToggleAllContainer extends Component {
  render() {
    const { toggleAll } = this.props

    return (
      <div className='toggle-all-container'>
        <div className='toggle-all-item'>
          <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
            <Toggle
              onToggle={toggleAll}
            />
          </MuiThemeProvider>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  toggleAll() {
    dispatch({
      type: TOGGLE_ALL,
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ToggleAllContainer)
