import React from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, bindActionCreators} from 'redux'
import { singleListingAction } from "./houseActions"

class HouseListing extends React.Component {
    render(){
		return (<div>  	
			<Link to="/singlelisting" onClick={this.getSingleListing.bind(this)}>
    		<img className='housePic' src={this.props.house.url} />
    		<strong>{this.props.house.house_name}</strong><br/>
    		{this.props.house.heading}<br/><br/>
    		<strong>Location:</strong><br/>
    		{this.props.house.street_add}<br/>
    		{this.props.house.city},{this.props.house.state} {this.props.house.zipcode}<br/>
    		<span className='price'><strong>Price:</strong> ${this.props.house.price} per night</span>
    		</Link>
    	</div>)
	}
	getSingleListing(){
		this.props.singleListingAction(this.props.house)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({singleListingAction: singleListingAction}, dispatch)
}

function mapStateToProps(state) {
  return {
    singlelisting: state
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseListing);

