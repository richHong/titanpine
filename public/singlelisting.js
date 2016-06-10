import React from 'react';
import { connect } from 'react-redux';
import SingleGMaps from './singleMap';
import MyCarousel from './carousel';
import $ from 'jquery'


class SingleListing extends React.Component {
	render(){
		return <div>
        <div className='carousel'>
          <MyCarousel />
        </div>

        <div className="houseInfo">

  				<span className='houseName'>
            <b>{this.props.listing ? this.props.listing.house_name : null}</b>
          </span><br/>

          <i>{this.props.listing ? this.props.listing.heading : null}</i><br/><br/>

          <b><i>Location:</i></b><br/>
          {this.props.listing ? this.props.listing.street_add : null}<br/>
          {this.props.listing ? this.props.listing.city : null},{this.props.listing ? this.props.listing.state : null} {this.props.listing ? this.props.listing.zipcode : null}<br/><br/>

          <b><i>Price:</i></b> ${this.props.listing ? this.props.listing.price : null} per night<br /><br/>

          <b><i>Vacancies:</i></b> {this.props.listing ? this.props.listing.vacancies : null} <br /><br />

          <b><i>Dates Available:</i></b> {this.props.listing ? this.props.listing.dates_avail : null} <br /><br />

          <b><i>House Interests:</i></b> {this.props.listing ? this.props.listing.house_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>) :  null}<br /><br />

          <b><i>House Mission:</i></b> {this.props.listing ? this.props.listing.house_mission : null} <br /><br />

          <b><i>House Rules:</i></b> {this.props.listing ? this.props.listing.house_rules : null} <br /><br />

          <b><i>Amenities:</i></b> {this.props.listing ? this.props.listing.amenities.split(',').map((amenity, i) => <span key={i} >{amenity}, </span>) :  null} <br /><br />

          <b><i>Primary Member:</i></b> {this.props.listing ? this.props.listing.primary_member : null} <br /><br />

          <form>
            <h4 className="contactHouse"><b>Contact {this.props.listing ? this.props.listing.house_name : 'Hacker House'}:</b></h4>
            <label>Your Message:</label><br />
            <textarea style={{width: '100%'}}ref={(message) => this.message = message} onChange={this.onMessage.bind(this)}></textarea><br/>
            <input name='message' type='submit' onClick={this.onSendMessage.bind(this)} value='Send'/>
          </form>

        </div>

        <SingleGMaps />


			</div>
	}

    onMessage(){
  }

    onSendMessage(e){
      e.preventDefault();
      var sender;
      var receiver;
      var username;
      var listing = "no name"
      var message = this.message.value
      let userID = window.localStorage.getItem('userID');
      fetch('http://localhost:3001/v1/users/?id=' + userID)
      .then(response => response.json())
      .then(json => {
        username = json.data[0].username
        sender = json.data[0].email
        receiver = this.props.listing.user.email
        if(this.props.listing.house_name){
          listing = this.props.listing.house_name
        }
      })
      .then(() => {
        var settings = {
              "url": "https://api.sendgrid.com/v3/mail/send/beta",
              "method": "POST",
              "headers": {
                  "authorization": "Bearer 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",
                  "content-type": "application/json",
                  "cache-control": "no-cache",
                  "postman-token": "d1d73c00-90fc-fcb0-1246-d7f416a65443"
              },
              "processData": false,
             "data": JSON.stringify({personalizations: [{to: [{email: receiver}]}],from: {email: sender},subject: username + " is interested in " + listing + " on Hacker Habitat" ,content: [{type: "text/plain", value: message}]})
        }
        $.ajax(settings).done(function (response, req, error) {
          if (req === 'success') {
            alert("Your Message Was Sent!")
          }
          console.log(response);
        });
    })
  }
}


function mapStateToProps(state) {
  return {
    listing: state.listings.singleListing
  }
}

export default connect(mapStateToProps)(SingleListing);
