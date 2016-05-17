import React, { Component } from 'react';
import { render } from 'react-dom';
import NavBar from './Navbar';
import SearchBar from './SearchBar'

class HelloWorld extends Component {
  render() {
    return (<div>
    	Hello Titans!
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))
