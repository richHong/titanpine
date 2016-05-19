import React from 'react';
class SignUp extends React.Component {
	render(){
		return <div>
			<form id="signupform">
				username: <input ref={(username) => this.username = username} /><br />
				password: <input type='password' ref={(password) => this.password = password} /><br />
				re-enter password: <input type='password' ref={(confirmPassword) => this.confirmPassword = confirmPassword} /><br />
				<button onClick={this.submitForm.bind(this)}>Join</button>
			</form> 	
		</div>
	}

	submitForm(e){
		e.preventDefault()
		var username = this.username.value;
		var password = this.password.value;
		var confirmPassword = this.confirmPassword.value;
	}
}

export default SignUp
