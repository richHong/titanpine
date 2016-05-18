import React from 'react';
class NavBar extends React.Component {
  constructor() {
		super();
		fetch('http://localhost:3001/v1/users')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        console.log(response.body);
        return response.json();
      })
      .then(function(stories) {
        console.log(stories);
      });
	}

	render(){
		return (
			<form>
				<a href className='searchlinks'>Sign Up</a>
				<a href className='searchlinks'>Log In</a>
    		</form>
    	);
	}
}


export default NavBar
