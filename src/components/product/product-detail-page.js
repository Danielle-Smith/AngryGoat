import React, { Component } from 'react';
import axios from 'axios';

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      productItem: ''
    };
  }

  handleAddToCart = () => {
    console.log(this.state.productItem)
    console.log("Item added to cart")
  }

  getProductItem() {
    axios
      .get(`http://127.0.0.1:5000/t-shirt/${this.state.currentId}`
      ).then(response => {
        console.log(response);
        this.setState({ 
          productItem: response.data
        });
      })
      .catch(error => {
        console.log("getProductItem", error);
      });

  }

  componentDidMount() {
    this.getProductItem();
  }

  render() {
    const { color, description, price, size, title } = this.state.productItem;
    return (
      <div className="product-detail-page">
        <img src="https://via.placeholder.com/500"/>
        <div className="product-detail-page__info">
          <div className="product-detail-page__title">{title}</div>
          <div className="product-detail-page__description">Description: {description}</div>
          <div className="product-detail-page__color">Color: {color}</div>
          <div className="product-detail-page__size">Size: {size}</div>
          <div className="product-detail-page__price">{price}</div>
          <button onClick={this.handleAddToCart} className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductDetailPage;