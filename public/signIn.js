import React, { Component } from 'react';
import SignInForm from './signInForm';
import NavBar from './navBar';
import SearchBar from './SearchBar';

export default class SignIn extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <SearchBar/>
        <h1>User Login</h1>
        <SignInForm/>       
      </div>
    )
  }
}