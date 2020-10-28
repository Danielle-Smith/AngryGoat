import React, { Component } from 'react';

import Logo from "../../../static/assets/images/angry-goat-logo.jpg";
import ProductContainer from '../product/product-container';
import ShopHeader from './shop-header';
import Searchbar from './searchbar';

class Shop extends Component {
  render() {
    return(
      <div className='shop'>
        <div className='logo-wrapper'>
          <img className="logo" src={Logo} alt="logo"/>
        </div>
        <ShopHeader />
        <Searchbar />
        <div className="product-wrapper">
          <ProductContainer />
        </div>
        
      </div>
    )
  }
}

export default Shop;