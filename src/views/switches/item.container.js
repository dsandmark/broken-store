import React, { Component } from 'react'
import Item from './item.component'
import './item.css'

class ItemContainer extends Component {
  onItemClick(id) {
    console.log('id', id)
  }

  render() {
    return (
      <div className='item-container'>
        <Item
          id={1}
          addToBasket={this.onItemClick}
        />

        <Item 
          id={2}
          addToBasket={this.onItemClick}
        />

        <Item 
          id={3}
          addToBasket={this.onItemClick}
        />
      </div>
    )
  }
}

export default ItemContainer
