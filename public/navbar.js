import React from 'react';
class NavBar extends React.Component {
	render(){
		return (
			<div id='nav'>
				<a href className='searchlinks'>Sign Up</a>
				<a href className='searchlinks'>Log In</a>
    			<input type="text" className='searchbox' placeholder=""/>
    			<button type="submit" className='searchbutton'>Search</button>
    		</div>
    	)
	}
}

export default NavBar