import React, { Component } from 'react';
import HouseListOfListings from './houseListOfListings';
import HouseListing from './houseListing';

import { connect } from 'react-redux';
import houseListingReducer from './appReducers'

class Results extends Component {

  listHouses(){
    // console.log('NEW THIS', this.props.listing.name)
      if(this.props.listing.name){
      return this.props.listing.name.map((listing) => {
        return (<li key={listing.id}>city:{listing.city}<br />
          dates available:{listing.dates_avail}<br/>
          house rules:{listing.house_rules}</li>)
      })
    }
  }

  render() {
    return (
        <ul>{this.listHouses()}</ul>
      )
  }
}

function mapStateToProps(state) {
  console.log(state, "State on Results")
  return {
    listing: state.listings
  }
}


export default connect(mapStateToProps)(Results);

