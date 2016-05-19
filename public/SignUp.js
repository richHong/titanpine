import React from 'react';
class SignUp extends React.Component {
	render(){
		return <div>
			<form id="signupform">
			username: <input /><br />
			password: <input /><br />
			re-enter password: <input /><br />
			first name: <input /><br />
			last name: <input /><br />
			<button className='signupbutton'>Join</button>
			</form>

		</div>
	}
}

export default SignUp
