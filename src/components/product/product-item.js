import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends Component {
  constructor(props) {
    super(props);
  
  }

  render() {
    const { id, title, price } = this.props.item;
    return (
      <Link to={`/product/${id}`}>
        <div className="product-item">
          <img src="https://via.placeholder.com/250"/>
          {title}
          {price}
        </div>
      </Link>
    )

  }
}

export default ProductItem;