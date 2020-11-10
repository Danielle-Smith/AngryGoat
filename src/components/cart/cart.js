import React, { Component } from 'react';

import CartItem from './cart-item';

class Cart extends Component {
  constructor(props) {
    super(props);

  }
  
  render() {
    const productItem = props => {
      const {
        title,
        price
      } = props.productItem;
    }
    return(
      <div className="cart">
        <div className="cart-header">
          <div className="cart-header__title">Cart Item</div>
          {title}
          {price}
        </div>


        {this.state.cartItem == true ? 
          <div>
            
            <div className="cart-taxes-shipping">
              <p>Shipping: $5.00</p>
              <p>Subtotal: $20.00</p>
              <p>Tax: 5.95%</p>
            </div>
          </div>
          : <p>Your cart is empty</p>}
        

        <div className="cart-footer">
          <div className="cart-footer__cart-total">Total: $25.00</div>
        </div>
      </div>
    )
  }
}

export default Cart;