import React, { Component } from 'react';
import HouseListingForm from './houseListingForm';
import NavBar from './navBar';
import SearchBar from './SearchBar';

export default class CreateHouse extends Component {
  render() {
    return (
      <div> 
        <NavBar/>
        <SearchBar/>
        <h1>Create Your Hacker House Profile Below</h1>
        <HouseListingForm/>       
      </div>
    )
  }
}
