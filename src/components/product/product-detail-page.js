import React, { Component } from 'react';
import axios from 'axios';

import Tshirt from "../../../static/assets/images/t-shirt-image.jpg";

class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentId: this.props.match.params.slug,
      productItem: [],
      cartItem: []
    };
  }

  handleAddToCart = () => {
    console.log(this.state.productItem)
    return <div><CartItem /></div>
    
  }


  getProductItem() {
    axios
      .get(`http://127.0.0.1:5000/product/${this.state.currentId}`
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
    const { title, description, price } = this.state.productItem;
    return (
      <div className="product-detail-page">
        <img src={Tshirt} width="400" height="550"/>
        <div className="product-detail-page__info">
          <div className="product-detail-page__title">{title}</div>
          <div className="product-detail-page__description">Description: <br/>{description}</div>
          <div className="dropdown">
            <button>Size</button>
          </div>
          <div className="dropdown">
            <button>Color</button>
          </div>
          <div className="dropdown">
            <button>Quantity</button>
          </div>
          <div className="product-detail-page__price">${price}</div>
          <button onClick={this.handleAddToCart} className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    );
  }
}

export default ProductDetailPage;

// <button onClick={() => this.setState({})}