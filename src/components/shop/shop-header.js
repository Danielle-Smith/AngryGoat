import React, { Component } from 'react';

class ShopHeader extends Component {

  // onSubmit = (fields) => {
  //   this.props.filterProductsWithQuery(fields)
  // }

  
  render() {
    return(
      <div className='shop-header'>
        <div className='shop-links'>
          <a className='shop-link' href='#'>All</a>
          <a className='shop-link' href='#'>Mens</a>
          <a className='shop-link' href='#'>Womens</a>
          <a className='shop-link' href='#'>Kids</a>
          <a className='shop-link' href='#'>Adult Humor</a>
        </div>
        
        {/* <Searchbar onSubmit={this.onSubmit} className='shop__search-bar' /> */}
      </div>
    )
  }
}


export default ShopHeader;