import React from 'react';
import { Link } from 'react-router'
class NavBar extends React.Component {
	render(){
		return (
			<div>
				<Link to='/signup' className='searchlinks'>Sign Up</Link>
				<Link to='/login' className='searchlinks'>Log In</Link>
    		</div>
    	);
	}
}


export default NavBar
