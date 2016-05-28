import React from 'react';
class ContactForm extends React.Component {
	render(){
		return (
			<form action="MAILTO:andielane@yahoo.com" method="post">
				<label>Your Message:</label><br />
				<textarea ref={(message) => this.message = message} rows='40' cols='150'></textarea><br/>
				<input type='submit' onClick={this.onMessage.bind(this)}to="/createProfile" value='Send'/>
			</form>
		)
	}

	onMessage(){
		console.log(this.message.value)
	}

}

export default ContactForm

// <input type='submit' onClick={this.submitForm.bind(this)} to="/createProfile" value='Send'/>
// onSubmit={this.onMessage.bind(this)}