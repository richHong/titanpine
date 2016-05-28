import React, { Component } from 'react';

export default class singleProfile extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentWillMount(){
    let authToken = window.localStorage.getItem('token');
    let userID = window.localStorage.getItem('userID');
     fetch('http://localhost:3001/v1/users/'+userID+'?access_token='+authToken)
     .then(response => response.json())
     .then(json => console.log(json));
  }
  render() {
    return (
      <div>
        <div className='profileContainer'>
          <div className='avatarContainer'>
            <img className='avatar' src={this.state.avatar || 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png'} />
          </div>
          <div className='infoContainer'>
            <span><b>Name:</b> {this.state.first_name} {this.state.last_name}</span><br /><br />
            <span><b>Hometown:</b> {this.state.hometown}</span><br /><br />
            <span><b>Occupation:</b> {this.state.occupation}</span><br /><br />
            <span><b>Description:</b> {this.state.description}</span><br /><br />
            <span><b>General Interests:</b> {this.state.gen_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>)}</span><br /><br />
            <span><b>Tech Interests:</b> {this.state.tech_interests.split(',').map((interest, i) => <span key={i} >{interest}, </span>)}</span><br /><br />
          </div>
        </div>
      </div>
    )
  }
}