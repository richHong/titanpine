import React from 'react';
import { connect } from 'react-redux';
import SingleGMaps from './singleMap';
import MyCarousel from './carousel';

class SingleListing extends React.Component {
	render(){
		return <div>

        <div className='carousel'>
          <MyCarousel />
        </div>

        <div className="houseInfo">

  				<span className='houseName'>
            <b>{this.props.listing ? this.props.listing.house_name : null}</b>
          </span><br/>

          <i>{this.props.listing ? this.props.listing.heading : null}</i><br/><br/>

          <b>Location:</b><br/>
          {this.props.listing ? this.props.listing.street_add : null}<br/>
          {this.props.listing ? this.props.listing.city : null},{this.props.listing ? this.props.listing.state : null} {this.props.listing ? this.props.listing.zipcode : null}<br/><br/>

          <b>Price:</b> ${this.props.listing ? this.props.listing.price : null} per night<br /><br/>

          <b>Vacancies:</b> {this.props.listing ? this.props.listing.vacancies : null} <br /><br />

          <b>Dates Available: </b> {this.props.listing ? this.props.listing.dates_avail : null} <br /><br />

          <b>House Interests:</b> {this.props.listing ? this.props.listing.house_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>) :  null}<br /><br />

          <b>House Mission:</b> {this.props.listing ? this.props.listing.house_mission : null} <br /><br />

          <b>House Rules: </b> {this.props.listing ? this.props.listing.house_rules : null} <br /><br />

          <b>Amenities: </b> {this.props.listing ? this.props.listing.amenities.split(',').map((amenity, i) => <span key={i} >{amenity}, </span>) :  null} <br /><br />

          <b>Primary Member: </b> {this.props.listing ? this.props.listing.primary_member : null} <br /><br />
        </div>

        <SingleGMaps />

			</div>
	}
}

function mapStateToProps(state) {
  return {
    listing: state.listings.singleListing
  }
}

export default connect(mapStateToProps)(SingleListing);