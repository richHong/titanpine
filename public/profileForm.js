import React from 'react';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import Axios from 'axios';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      genInterests:['Music', 'Movies', 'Books', 'Fashion', 'Outdoors', 'Sports', 'Crafting', 'Gaming', 'Cycling', 'Running', 'Camping', 'Festivals', 'Cooking'],
      techInterests: ['Javascript','Ruby', 'Node', 'React', 'Angular', 'Express', 'MongoDB', 'Postgres','Redux', 'PHP', 'Python', 'C++', 'C#', 'Neo4J', 'iOS', 'Android', 'Java'],
      general:[],
      tech:[]

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

  submit(e, avatar, firstName, lastName, description, hometown, occupation, general, tech){
    e.preventDefault();

    let authToken = window.localStorage.getItem('token');
    let userID = window.localStorage.getItem('userID');
    let avatarName;

    if (avatar.value === ''){
      avatarName = avatar.value;
    } else {
      avatarName = 'https://s3-us-west-1.amazonaws.com/hackerhabitatavatars/'+avatar.value.slice(12);
      var form = document.getElementById('avatarForm');
      var fdata = new FormData(form);
      Axios.post('http://localhost:3000/v1/ap', fdata)
      .then(response => console.log(response));
    }

    fetch('http://localhost:3001/v1/users/'+userID+'?access_token='+authToken, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatarName,
        first_name: firstName.value,
        last_name: lastName.value,
        hometown: hometown.value,
        description: description.value,
        occupation: occupation.value,
        gen_interests: general.value+this.state.general,
        tech_interests: tech.value+this.state.tech
      })
    }).then(response => {
      hashHistory.push('/profile');
    });
  }

  render(){
    return(
        <div>
          <h1>EDIT PROFILE</h1>

          <form id="avatarForm">
            <label>Upload Avatar:</label><br/>
            <input type='file' name='file' className='fileUpload'ref={input => this.avatar = input} />
          </form>

          <form id="avatarForm" onSubmit={e => this.submit(e, this.avatar, this.firstName, this.lastName, this.description, this.hometown, this.occupation, this.general, this.tech)}>

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
            <input type='text'ref={input => this.general = input} /><br/>
            <div>
              {this.state.genInterests.map((value, i) => {
                return (
                  <div key={i} className="checkboxItem">
                    <input type="checkbox" onChange={e => this.addGeneral(value)} />
                    <span> {value} </span>
                  </div>
                  )
              })}
            </div><br/><br/><br/><br/>

            <label id="techInterests">Tech Interests:</label><br/><br/>
            <input type='text'ref={input => this.tech = input} /><br/>
            <div>
              {this.state.techInterests.map((value, i) => {
                return (
                  <div key={i} className="checkboxItem">
                    <input type="checkbox" onChange={e => this.addTech(value)} />
                    <span> {value} </span>
                  </div>
                  )
              })}
            </div><br/><br/><br/><br/>

            <input id="profileSubmit" type="submit" value="Save Changes"/>

          </form>
        </div>
      )
  }
}

export default ProfileForm
