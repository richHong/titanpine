import React, { Component } from 'react';
import HouseListOfListings from './houseListOfListings';
import SingleProfile from './singleProfile';
// import Instafeed from 'instafeed.js';

export default class MyProfile extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentWillMount(){
    let userID = window.localStorage.getItem('userID');

    fetch('http://localhost:3001/v1/listings/?user_id='+userID)
    .then(response => response.json())
    .then(json => {
      this.setState({favorites: json.data});
    });
  }
  // componentDidMount(){
  //   const TAG = 'hacker'
  //   let feed = new Instafeed({
  //       get: 'tagged',
  //       tagName: TAG,
  //       clientId: 'bcec18bb08df4a8da99f3df22dc7e61b',
  //       accessToken: '2899060501.1677ed0.943cb0829c5d4dc3b563acd154673713',
  //       limit: 21
  //   });
  //   feed.run();
  // }
  render() {
    return (
      <div>
        <HouseListOfListings houses={this.state.favorites} page='profile'/>
        <SingleProfile />
        <div id='instafeed' className='instafeed'></div>
      </div>
    )
  }
}
