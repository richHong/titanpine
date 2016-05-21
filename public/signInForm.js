import React from 'react';

class SignIn extends React.Component {
  handleSubmit(e, username, password) {
    e.preventDefault();

    fetch('http://localhost:3001/v1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  
  render(){
    return (
      <form onSubmit={e => this.handleSubmit(e, this.username, this.password)}>
        <label>Username: </label><input ref={(username) => this.username = username} /><br/>
        <label>Password: </label><input type='password' pattern=".{5,}" ref={(password) => this.password = password} /><br/>
        <input type="submit" value="Sign In"/>
      </form>
      )
  }

}

export default SignIn