import React, { Component } from 'react';

import Navbar from './navbar';
import Icons from "../helpers/icons";

class App extends Component {
  constructor(props) {
    super(props);

    Icons();
  }

  render() {
    return (
      <div className='app'>
        <Navbar />
        
        {this.props.children}
      </div>
    );
  }
}

export default App;