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
            <b>{this.props.listing.house_name}</b>
          </span><br/>

          <i>{this.props.listing.heading}</i><br/><br/>

          <b>Location:</b><br/>
          {this.props.listing.street_add}<br/>
          {this.props.listing.city},{this.props.listing.state} {this.props.listing.zipcode}<br/><br/>

          <b>Price:</b> ${this.props.listing.price} per night<br /><br/>

          <b>Vacancies:</b> {this.props.listing.vacancies} <br /><br />

          <b>Dates Available: </b> {this.props.listing.dates_avail} <br /><br />

          <b>House Interests:</b> {this.props.listing.house_interests ? this.props.listing.house_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>) :  null}<br /><br />

          <b>House Mission:</b> {this.props.listing.house_mission} <br /><br />

          <b>House Rules: </b> {this.props.listing.house_rules} <br /><br />

          <b>Amenities: </b> {this.props.listing.amenities ? this.props.listing.amenities.split(',').map((amenity, i) => <span key={i} >{amenity}, </span>) :  null} <br /><br />

          <b>Primary Member: </b> {this.props.listing.primary_member} <br /><br />
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