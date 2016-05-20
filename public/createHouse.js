import React, { Component } from 'react';
import HouseListingForm from './houseListingForm';

export default class CreateHouse extends Component {
  render() {
    return (
      <div> 
        <h1>Create Your Hacker House Profile Below</h1>
        <HouseListingForm/>       
      </div>
    )
  }
}
