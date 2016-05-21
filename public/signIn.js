import React, { Component } from 'react';
import SignInForm from './signInForm';
import NavBar from './navBar';

export default class SignIn extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <h1>User Login</h1>
        <SignInForm/>       
      </div>
    )
  }
}