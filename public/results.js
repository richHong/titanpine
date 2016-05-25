import React, { Component } from 'react';
import HouseListOfListings from './houseListOfListings';
import HouseListing from './houseListing';

export default class Results extends Component {
  constructor(){
    super();
    this.state = {
      houses:[{
        url: 'https://cdn-images-1.medium.com/max/400/1*wV0lBcrBtw3iqsCtkgZTBg.png',
        house_name: "Telegraph Hacker House",
        heading: "You like that, don't you!",
        street_add: "1600 Shattuck Ave",
        city: "Berkeley",
        state:"CA",
        zipcode: "94709",
        price: "55.00"
      },{
        url:'http://www.socketsite.com/wp-content/uploads/2014/02/2123-2127-Castro.gif',
        house_name: "House of Pain",
        heading: "Insane in the brain!",
        street_add: "123 Broadway",
        city: "Oakland",
        state:"CA",
        zipcode: "94612",
        price: "45.00"
      },{
        url:'http://www.insidesfre.com/wp-content/uploads/2013/04/243romain.jpg',
        house_name: "Tech Tower",
        heading: "It's Amazing!",
        street_add: "23122 Fremont",
        city: "San Jose",
        state:"CA",
        zipcode: "94483",
        price: "50.00"
      },{
        url: 'http://noehill.com/sf/landmarks/hayes/russell_warrren_house_thumb.jpg',
        house_name: "Digital Domain",
        heading: "Technology is good!",
        street_add: "4234 Broadway",
        city: "San Francisco",
        state:"CA",
        zipcode: "92343",
        price: "60.00"
      },{
        url:'https://cdn3.vox-cdn.com/uploads/chorus_image/image/48181361/sgijsdlfjlsd.0.0.jpg',
        house_name: "Coder Condos",
        heading: "Brain me!",
        street_add: "83234 Brains",
        city: "Mountainview",
        state:"CA",
        zipcode: "94234",
        price: "40.00"
      }]
    };

  }
  render() {
    return (
      <div>
        <HouseListOfListings houses={this.state.houses} />
        <img className='map'src="http://www.spur.org/sites/default/files/wysiwyg/20-san%20francisco%20zoom%2012%202009_0.jpg" />
      </div>
    )
  }
}
