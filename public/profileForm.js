import React from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
let currentUserID = window.localStorage.getItem('u');


class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genInterests:['Music', 'Movies', 'Books', 'Fashion', 'Outdoors', 'Sports', 'Crafting', 'Gaming'],
      techInterests: ['Javascript','Ruby', 'Node', 'React', 'Angular', 'Express', 'MongoDB', 'Postgres','Redux'],
      general:[],
      tech:[],
      currentUserID: currentUserID
    };
    this.submit = this.submit.bind(this);
    this.addGeneral = this.addGeneral.bind(this);
    this.addTech = this.addTech.bind(this);
  }

  addGeneral (value){
    if (this.state.general.includes(value)){
      this.state.general.forEach((interest, index, list) => {
        list.splice(index,1);
      });
    } else {
      this.state.general.push(value);
    }
  }

  addTech (value){
    if (this.state.tech.includes(value)){
      this.state.tech.forEach((interest, index, list) => {
        list.splice(index,1);
      });
    } else {
      this.state.tech.push(value);
    }
  }

  submit(e, firstName, lastName, description, hometown, occupation){
    e.preventDefault();

    fetch('http://localhost:3001/v1/users/'+currentUserID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName.value,
        last_name: lastName.value,
        hometown: hometown.value,
        description: description.value,
        occupation: occupation.value,
        gen_interests: this.state.general,
        tech_interests: this.state.tech
      })
    }).then(response => {
      console.log(response);
      browserHistory.push('/createHouse');
    });
  }

  render(){
    return(
        <form onSubmit={e => this.submit(e, this.firstName, this.lastName, this.description, this.hometown, this.occupation)}>
          <h1>EDIT PROFILE</h1>
          <label>First Name:</label><br/>
          <input type='text'ref={input => this.firstName = input} /><br/>
          <label>Last Name:</label><br/>
          <input type='text'ref={input => this.lastName = input} /><br/>
          <label>Description:</label><br/>
          <textarea id="aboutMe" placeholder="Tell me about yourself" ref={input => this.description = input} /><br/>
          <label>Hometown:</label><br/>
          <input type='text'placeholder="Where are you from?" ref={input => this.hometown = input} /><br/><br/>
          <label>Occupation:</label><br/>
          <input type='text'placeholder="Where do you work?" ref={input => this.occupation = input} /><br/><br/>
          <label>General Interests:</label><br/><br/>
          <div>
            {this.state.genInterests.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addGeneral(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
          </div><br/><br/><br/><br/>
          <label id="techInterests">Tech Interests:</label><br/><br/>
          <div>
            {this.state.techInterests.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addTech(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
          </div><br/><br/><br/><br/>
          <input id="profileSubmit" type="submit" value="Save Changes"/>
        </form>
      )
  }
}

export default ProfileForm
