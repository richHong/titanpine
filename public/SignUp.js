import React from 'react';
class SignUp extends React.Component {
	render(){
		return <div>
			<form id="signupform">
				username: <input ref={(username) => this.username = username} /><br />
				password: <input type='password' ref={(password) => this.password = password} /><br />
				re-enter password: <input type='password' ref={(confirmPassword) => this.confirmPassword = confirmPassword} /><br />
				email:<input ref={(email) => this.email = email} /><br />
				<button onClick={this.submitForm.bind(this)} to="/createProfile">Join</button>
			</form> 	
		</div>
	}

	submitForm(e){
		e.preventDefault()
  		fetch('http://localhost:3001/v1/users/', {
      		method: 'POST',
      		headers: {'Content-Type': 'application/json'},
      		body: JSON.stringify({username: this.username.value, password: this.password.value, email: this.email.value})
    	})
    	.then(function(response){
    		window.location = '#/createProfile';
      		console.log(response);
    	});
	}
}

export default SignUp
