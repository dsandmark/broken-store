import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Toggle from 'material-ui/Toggle'
import Card from 'material-ui/Card'

class Item extends Component {
  constructor() {
    super()
    this.state = {
      toggled: false,
    }
  }

  toggle = () => {
    this.setState({
      toggled: !this.state.toggled,
    })
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.forceToggled) {
      this.setState({
        toggled: true,
      })
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card className='item' onClick={() => this.toggle()}>
          <Toggle
            onToggle={() => {}}
            toggled={this.state.toggled}
          />
        </Card>
      </MuiThemeProvider>
    )
  }
}

Item.PropTypes = {
  forceToggled: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  forceToggled: state.switches.allToggled,
})

export default connect(mapStateToProps)(Item)
