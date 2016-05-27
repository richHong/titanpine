import React, { Component } from 'react';
import { connect } from 'react-redux';
import HouseListOfListings from './houseListOfListings';
import HouseListing from './houseListing';
import GMaps from './map';
// import houseListingReducer from './appReducers'

class Results extends Component {
 render(){
    return (
      <div>
        {this.props.listing.name ? <HouseListOfListings houses={this.props.listing.name} /> : null}
        <GMaps />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    listing: state.listings
  }
}

export default connect(mapStateToProps)(Results);