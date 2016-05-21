import React, { Component } from 'react';
import ProfileForm from './profileForm';
import NavBar from './navBar';

export default class CreateProfile extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <h1>Welcome! Create Your Profile Below</h1>
        <ProfileForm/>       
      </div>
    )
  }
}
