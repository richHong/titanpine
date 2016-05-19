
import React, { Component } from 'react'
import ProfileForm from './profileForm'

export default class CreateProfile extends Component {
  render() {
    return (
      <div> 
        <h1>Welcome! Create Your Profile Below</h1>
        <ProfileForm/>       
      </div>
    )
  }
}
