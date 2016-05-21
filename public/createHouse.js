import React, { Component } from 'react';
import HouseListingForm from './houseListingForm';
import NavBar from './navBar';

export default class CreateHouse extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <h1>Create Your Hacker House Profile Below</h1>
        <HouseListingForm/>       
      </div>
    )
  }
}
