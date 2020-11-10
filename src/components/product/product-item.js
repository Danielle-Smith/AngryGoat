import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Tshirt from "../../../static/assets/images/t-shirt-image.jpg";

class ProductItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, title, price } = this.props.item;
    return (
      <Link to={`/product/${id}`} className="product-item">
        <div>
          <img className="t-shirt-image" src={Tshirt} alt="t-shirt" height="370" width="250"/>
          <h3>{title}</h3>
          <p>${price}</p>
        </div>
      </Link>
    )

  }
}

export default ProductItem;