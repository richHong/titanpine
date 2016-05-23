import React, { Component } from 'react';
import HouseListOfListings from './houseListOfListings';
import HouseListing from './houseListing';

export default class Results extends Component {
  constructor(){
    super();
    this.state = {
      houses:[{
        house_name: "Telegraph Hacker House",
        heading: "You like that, don't you!",
        street_add: "1600 Shattuck Ave",
        city: "Berkeley",
        state:"CA",
        zipcode: "94709",
        price: "55.00"
      },{
        house_name: "House of Pain",
        heading: "Insane in the brain!",
        street_add: "123 Broadway",
        city: "Oakland",
        state:"CA",
        zipcode: "94612",
        price: "45.00"
      }]
    };

  }
  render() {
    return (
      <div>
        <HouseListOfListings houses={this.state.houses}>
        </HouseListOfListings>
      </div>
    )
  }
}
