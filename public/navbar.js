import React from 'react';
import { Link } from 'react-router';
import SearchBar from './SearchBar';

class NavBar extends React.Component {
	render(){
		return (
			<ul className='nav'>
				<Link className="logo" to="/">Hacker Habitat</Link>
<<<<<<< HEAD
				<li ><SearchBar /></li>
				<li ><Link to='/signup' className='link'>Sign Up</Link></li>
				<li ><Link to='/signin' className='link'>Log In</Link></li>
				<li ><Link to="/createHouse" className='link'>Create House</Link></li>
				<li ><Link to='/createprofile' className='link'>Edit Profile</Link></li>
				<li ><Link to='/profile' className='link'>My Profile</Link></li>
=======
				<li><SearchBar /></li>
				<li><Link to='/signup' className='link'>Sign Up</Link></li>
				<li><Link to='/signin' className='link'>Log In</Link></li>
				<li><Link to='/signout' className='link'>Log Out</Link></li>
				<li><Link to="/createHouse" className='link'>Create House</Link></li>
				<li><Link to='/createprofile' className='link'>Create Profile</Link></li>
>>>>>>> dda19c20545eae31e1afc7e1a20686e586536ebd
				<div>{this.props.children}</div>
    	</ul>
    );
	}
}


export default NavBar
