import React from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';

class HousingForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      interestsArray:['Music', 'Movies', 'Books', 'Fashion', 'Outdoors', 'Sports', 'Crafting', 'Gaming','Javascript','Ruby', 'Node', 'React', 'Angular', 'Express', 'MongoDB', 'Postgres','Redux'],
      houseInterests:[],
      amenitiesArray:['Washer', 'Dryer', 'Cats Allowed', 'Dogs Allowed', 'Dishwasher', 'Garage', 'Gym', 'Mailroom','Wifi', 'Meeting Room/Lounge'],
      houseAmenities:[]
    };
    this.addInterest = this.addInterest.bind(this);
    this.addAmenity = this.addInterest.bind(this);
    this.submit = this.submit.bind(this);
  }

  addInterest (value){
    if (this.state.houseInterests.includes(value)){
      this.state.houseInterests.forEach((interest, index, list) => {
        list.splice(index,1);
      });
    } else {
      this.state.houseInterests.push(value);
    }
  }

  addAmenity (value){
    if (this.state.houseAmenities.includes(value)){
      this.state.houseAmenities.forEach((interest, index, list) => {
        list.splice(index,1);
      });
    } else {
      this.state.houseAmenities.push(value);
    }
  }

  submit(e, name, heading, street, city, state, zipCode, price, dateStart, dateEnd, interests, mission, rules, vacancies, primary, amenities){
    e.preventDefault();

    let geolocation;
    let authToken = window.localStorage.getItem('token');
    console.log(window.localStorage.getItem('token'));
    fetch('http://maps.googleapis.com/maps/api/geocode/json?address='+street.value+'+'+city.value+'+'+state.value)
    .then(response => response.json())
    .then(json => geolocation = json.results[0].geometry.location)
    .then(() => {
      fetch('http://localhost:3001/v1/listings?access_token='+authToken, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            house_name: name.value,
            heading: heading.value,
            street_add: street.value,
            city: city.value.toLowerCase(),
            state: state.value,
            zipcode: zipCode.value,
            price: price.value,
            dates_avail: dateStart.value+' to '+dateEnd.value,
            house_interests: interests.value+this.state.houseInterests,
            house_mission: mission.value,
            house_rules: rules.value,
            vacancies: vacancies.value,
            primary_member: primary.value,
            amenities: amenities.value+this.state.houseAmenities,
            lat: geolocation.lat,
            lng: geolocation.lng
        })
      })
      .then(response => {
        response.json();
        console.log(response);
      })
      .then(json => {
        console.log(geolocation)
        hashHistory.push('/results');
      });
    });
  }

  render(){
    return(
        <form onSubmit={e => this.submit(e, this.house_name, this.heading, this.street_add, this.city, this.stateName, this.zipCode, this.price, this.dates_start, this.dates_end, this.interests, this.house_mission, this.house_rules, this.vacancies, this.primary_member, this.amenities)}>
          <h1>CREATE A HACKER HOUSE</h1>
          <label>House Name:</label><br/>
            <input type='text'ref={input => this.house_name = input}/><br/>
          <label>Heading:</label><br/>
            <input type='text'ref={input => this.heading = input}/><br/>
          <label>Street Address:</label><br/>
            <input type='text'ref={input => this.street_add = input}/><br/>
          <label>City:</label><br/>
            <input type='text'ref={input => this.city = input}/><br/>
          <label>State:</label><br/>
            <input type='text'maxLength='2'ref={input => this.stateName = input}/><br/>
          <label>Zipcode:</label><br/>
            <input type='text'pattern="\d*" maxLength='5' min='0'ref={input => this.zipCode = input}/><br/>
          <label>Price:</label><br/>
            <input type="number" name="currency" min="0" max="9999" step="0.01" ref={input => this.price = input}/><br/>
          <label>Dates Available:</label><br/>
            <input type="date"ref={input => this.dates_start = input}/><input type="date"ref={input => this.dates_end = input}/><br/>
          <label>Interests:</label><br/>
            <input type='text'ref={input => this.interests = input}/><br/>
            <div>
            {this.state.interestsArray.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addInterest(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
            </div><br/><br/><br/><br/><br/><br/>
          <label>Mission Statement:</label><br/>
            <textarea ref={input => this.house_mission = input}/><br/>
          <label>House Rules:</label><br/>
            <textarea ref={input => this.house_rules = input}/><br/>
          <label>Number of Vacancies:</label><br/>
            <input type="number" min='0' ref={input => this.vacancies = input}/><br/>
          <label>Primary Member:</label><br/>
            <input type='text'ref={input => this.primary_member = input}/><br/>
          <label>Amenities:</label><br/>
            <input type='text'ref={input => this.amenities = input}/><br/>
            <div>
              {this.state.amenitiesArray.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addAmenity(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
            </div><br/><br/><br/>
          <input id="housingSubmit" type="submit" value="Create House"/>
        </form>
      )
  }
}

export default HousingForm
