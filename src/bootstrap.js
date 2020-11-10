import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Router, Switch, Route } from "react-router-dom";
import reducers from "./reducers";

import history from './history';



import App from "./components/app";
import Shop from "./components/shop/shop";
import ProductDetailPage from "./components/product/product-detail-page";
import Contact from "./components/contact";
import Cart from "./components/cart/cart";
import ProductItem from './components/product/product-item';

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <App>
          <Switch>
            <Route path='/' exact component={Shop} />
            <Route path='/product/:slug' render={props => (<ProductDetailPage {...props} /> )} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/cart' render={props => (
              <Cart {...props} />
            )} />
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);
