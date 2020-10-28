import React, { Component } from 'react';
import axios from 'axios';

import ProductItem from './product-item';

class ProductContainer extends Component {
  constructor() {
    super();

    this.state = {
      products: null
    };
  }

  getProductItems() {
    axios
      .get('http://127.0.0.1:5000/t-shirts')
      .then(response => {
        this.setState({
          products: response.data
        });
      }).catch(error => {
        console.log("error", error);
      })

  }

  componentDidMount() {
    this.getProductItems();
  }

  render() {
    return(
      <div>

        {
          this.state.products !== null ?
          <div>
            {
                Object.entries(this.state.products).map( item => (
                  <ProductItem key={item[1].id} id={item[1].id} item={item[1]} title={item[1].title} price={item[1].price} slug={item[1].id}/>
                ))
            }
          </div>
          : null
        }


      </div>
    );
  }
}

export default ProductContainer;