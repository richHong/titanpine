import React from 'react';
import { connect } from 'react-redux';
import SingleGMaps from './singleMap';
import MyCarousel from './carousel';
import $ from 'jquery'


class SingleListing extends React.Component {
	render(){
    console.log(this.props)
		return <div>
        <div className='carousel'>
          <MyCarousel />
        </div>

        <div className="houseInfo">

  				<span className='houseName'>
            <b>{this.props.listing.house_name}</b>
          </span><br/>

          <i>{this.props.listing.heading}</i><br/><br/>

          <b>Location:</b><br/>
          {this.props.listing.street_add}<br/>
          {this.props.listing.city},{this.props.listing.state} {this.props.listing.zipcode}<br/><br/>

          <b>Price:</b> ${this.props.listing.price} per night<br /><br/>

          <b>Vacancies:</b> {this.props.listing.vacancies} <br /><br />

          <b>Dates Available: </b> {this.props.listing.dates_avail} <br /><br />

          <b>House Interests:</b> {this.props.listing.house_interests ? this.props.listing.house_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>) :  null}<br /><br />

          <b>House Mission:</b> {this.props.listing.house_mission} <br /><br />

          <b>House Rules: </b> {this.props.listing.house_rules} <br /><br />

          <b>Amenities: </b> {this.props.listing.amenities ? this.props.listing.amenities.split(',').map((amenity, i) => <span key={i} >{amenity}, </span>) :  null} <br /><br />

          <b>Primary Member: </b> {this.props.listing.primary_member} <br /><br />
        </div>

        <SingleGMaps />
        <form>
          <label>Your Message:</label><br />
          <textarea ref={(message) => this.message = message} onChange={this.onMessage.bind(this)} rows='40' cols='150'></textarea><br/>
          <input name='message' type='submit' onClick={this.onSendMessage.bind(this)} value='Send'/>
        </form>

			</div>
	}

    onMessage(){
    console.log(this.message.value)
  }

    onSendMessage(e){
      e.preventDefault();
      var sender;
      var receiver;
      var username;
      var listing = "no name"
      var message = this.message.value
      let userID = window.localStorage.getItem('userID');
      console.log("Here is the listing",this.props.listing.user)
      fetch('http://localhost:3001/v1/users/?id=' + userID)
      .then(response => response.json())
      .then(json => {
        console.log(json.data,"Senders Email:", json.data[0].email, "Receivers Email:", this.props.listing.user.email, "Username", json.data[0].username)
        username = json.data[0].username
        sender = json.data[0].email
        receiver = this.props.listing.user.email
        if(this.props.listing.house_name){
          listing = this.props.listing.house_name
        }
      })
      .then(() => {
        console.log("HI THERE")
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
        $.ajax(settings).done(function (response) {
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