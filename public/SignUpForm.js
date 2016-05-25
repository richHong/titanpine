import React from 'react';

class SignUpForm extends React.Component {
	render(){
		return (
			<form id="signupform">
                <h1>SIGN UP</h1>
				Username: <input type='text'ref={(username) => this.username = username} /><br />
				Password: <input type='password' pattern=".{5,}" ref={(password) => this.password = password} /><br />
				Confirm Password: <input type='password' ref={(confirmPassword) => this.confirmPassword = confirmPassword} /><br />
				Email:<input type="email" ref={(email) => this.email = email} /><br />
				<input type='submit' onClick={this.submitForm.bind(this)} to="/createProfile" value='Join'/>
			</form> 	
        )
	}

	submitForm(e){
		e.preventDefault()
    let username = this.username.value.toLowerCase();
    console.log(username)
		if(this.password.value.length >= 5){
			if(this.password.value === this.confirmPassword.value){
				if(this.email.value.indexOf("@") > -1 && this.email.value.indexOf(".") > -1){
  					fetch('http://localhost:3001/v1/users/', {
      					method: 'POST',
      					headers: {'Content-Type': 'application/json'},
      					body: JSON.stringify({username: username, password: this.password.value, email: this.email.value})
    				})
    				.then(function(response){
    					if(response.statusText === 'OK'){
    						window.location = '#/createProfile';
    					} else {
    						alert("Either your email or username is already taken please try again")
    					}		
    				});
    			} else {
    				alert("Please enter a valid email address")
    			}
    		} else {
    			alert("Please Confirm Your Password")
    		}
    	} else {
    		alert("Your Password must be at least 5 Characters in Length")
    	}
	}
}

export default SignUpForm
