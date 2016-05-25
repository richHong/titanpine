import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
	render(){
		return (
			<ul className='nav'>
				<Link to="/"><img className="homeIcon" src="http://www.yardleyinn.com/wp-content/themes/yardley/images/footer-home-icon.png"/></Link>
				<li ><SearchBar /></li>
				<li ><Link to='/signup' className='link'>Sign Up</Link></li>
				<li ><Link to='/signin' className='link'>Log In</Link></li>
				<li ><Link to="/createHouse" className='link'>Create House</Link></li>
				<li ><Link to='/createprofile' className='link'>Create Profile</Link></li>
				<div>{this.props.children}</div>
    		</ul>
    	);
	}
}


export default NavBar
