import React, { Component } from 'react'
import keydown, { Keys } from 'react-keydown'
import Modal from 'react-modal'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment'

const modalButtonStyle = {
  marginRight: 20,
}

const modalCloseButtonStyle = {
  position: 'absolute',
  bottom: 20,
  right: 20,
}

class ReusableComponents extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false,
      startDate: moment(),
    }
  }

  componentWillReceiveProps({keydown}) {
    if (keydown.event) {
      switch (keydown.event.which) {
        case Keys.left:
          this.props.router.push('performance')
          break
        case Keys.right:
          this.props.router.push('final-recap')
          break
        default:
          break
      }
    }
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true,
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
    })
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
    })
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div className='slide-container'>
          <h1 className='slide-title'>
            Reusable Components
          </h1>

          <h2 className='slide-subtitle'>No need to reinvent the wheel</h2>

          <RaisedButton
            onClick={this.openModal}
            label='Modal'
            primary={true}
            style={modalButtonStyle}
          />

          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />

          <Modal
            isOpen={this.state.modalIsOpen}
            contentLabel="Modal Example"
          >
            <h1>Modal Content</h1>
            <p>Lorem ipsum...</p>

            <FlatButton
              onClick={this.closeModal}
              label='Close'
              primary={true}
              style={modalCloseButtonStyle}
            />
          </Modal>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default keydown(ReusableComponents)
