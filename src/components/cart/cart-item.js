import React, { Component } from 'react';

class CartItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const { color, description, price, size, title } = this.state.productItem;
    return(
      <div className="cart-item">
        <img src="https://via.placeholder.com/150"/>
        <div className="cart-item__title">title</div>
        <div className="cart-item__color">Color: color</div>
        <div className="cart-item__size">Size: size</div>
        <div className="cart-item__price">price</div>
        <div className="cart-item__quantity">Quantity: 2</div>
        <div className="cart-item__product-total">Total: $20.00</div>
      </div>
    );
  }
}


export default CartItem;