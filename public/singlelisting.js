import React from 'react';
import { connect } from 'react-redux'
class SingleListing extends React.Component {
	render(){
		return <div>
					{this.props.listing.house_name}<br />
					{this.props.listing.heading}<br />
					{this.props.listing.street_add}<br />
					{this.props.listing.city}, {this.props.listing.state}
				</div>
	}
}

function mapStateToProps(state) {
  return {
    listing: state.listings.name
  }
}

export default connect(mapStateToProps)(SingleListing);