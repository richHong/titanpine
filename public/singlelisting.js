import React from 'react';
import { connect } from 'react-redux'
import GMaps from './map';
import MyCarousel from './carousel'

class SingleListing extends React.Component {
	render(){
    console.log(this.props.listing);
		return <div>
        <MyCarousel className='carousel'/>
        <div className="houseInfo">
  				<span className='houseName'><b>{this.props.listing.house_name}</b></span><br/>
          <i>{this.props.listing.heading}</i><br/><br/>

          <b>Location:</b><br/>
          {this.props.listing.street_add}<br/>
          {this.props.listing.city},{this.props.listing.state} {this.props.listing.zipcode}<br/><br/>

          <b>Price:</b> ${this.props.listing.price} per night<br /><br/>

          <b>Vacancies:</b> {this.props.listing.vacancies} <br /><br />

          <b>House Interests:</b> {this.props.listing.house_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>)}<br /><br />

          <b>House Mission:</b> {this.props.listing.house_mission} <br /><br />

          <b>House Rules: </b> {this.props.listing.house_rules} <br /><br />

          <button>Add to Favorites</button>

        </div>
        <GMaps />
			</div>
	}
}

function mapStateToProps(state) {
  return {
    listing: state.listings.name
  }
}

export default connect(mapStateToProps)(SingleListing);