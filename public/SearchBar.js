import React from 'react';
import { createStore, combineReducers, applyMiddleware, bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { getHouseAction } from "./houseActions"
import { Router, Route, hashHistory, browserHistory, Link } from 'react-router';

class SearchBar extends React.Component {
	render(){
		return (
			<div className='searchDiv'>
				<input ref={(input) => this.search = input} className='searchbox' />
    		<Link to='/results' onClick={this.onSubmit.bind(this)} className='searchbutton'>Search</Link>
    	</div>
    )
	}

	onSubmit(){
		var searchable = this.search.value.replace(" ", "+").toLowerCase();;
		fetch('http://localhost:3001/v1/listings/?city=' + searchable)
    	.then(response => response.json())
    	.then(json => this.props.getHouseAction(json))
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({getHouseAction: getHouseAction}, dispatch)
}

function mapStateToProps(state){
  return {
    listing: state.listings
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)