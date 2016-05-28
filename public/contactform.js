import React from 'react';
class ContactForm extends React.Component {
	render(){
		return (
			<form>
				<label>Your Message:</label><br />
				<textarea rows='40' cols='150'></textarea><br/>
				<input type='submit' to="/createProfile" value='Send'/>
			</form>
		)
	}
}

export default ContactForm

// <input type='submit' onClick={this.submitForm.bind(this)} to="/createProfile" value='Send'/>