import React, { Component } from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {

  render() {
    return (
      <div className='navlink-wrapper'>
        <div className='navlinks'>
          <NavLink to="/" className='navlink' activeClassName="selected-link">Shop</NavLink>
          <NavLink to="/contact" className='navlink' activeClassName="selected-link">Contact</NavLink>
          
          <ExternalLink className='link' href="http://facebook.com">
            <FontAwesomeIcon icon={['fab', 'facebook-square']} />
          </ExternalLink>
          <ExternalLink className='link' href="http://instagram.com">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </ExternalLink> 
        </div>
        <div className='cart-link'>
          <Link to="/cart" className='link'>
            <FontAwesomeIcon icon='shopping-cart'/>
          </Link>
        </div>
      </div>
      
    )
  }
}



export default Navbar;