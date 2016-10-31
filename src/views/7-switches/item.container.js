import React, { Component } from 'react'
import Item from './item.component'
import './item.css'

class ItemContainer extends Component {
  render() {
    return (
      <div className='item-container'>
        <Item />

        <Item />

        <Item />
      </div>
    )
  }
}

export default ItemContainer
