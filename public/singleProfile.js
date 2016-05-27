import React, { Component } from 'react';

export default class singleProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      first_name: 'Leroy',
      last_name: 'Jenkins',
      avatar: '',
      description: 'I am a software engineer living in the San Francisco Bay Area. Telegraph Academy has shown me all the things I need to become a top performer.',
      hometown: 'Berkeley',
      occupation: 'Software Engineer'
    };
  }
  componentWillMount(){
    fetch('https://api.meetup.com/find/groups?key=725d46123eba6b4a182e2d3e523a6f&category=34&location=san+francisco', {
      method: 'GET',
      headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}
    })
    .then(response => {
      response.json();
      console.log(response);
    })
  }
  render() {
    return (
      <div>
        <div className='profileContainer'>
          <div className='avatarContainer'>
            <img className='avatar' src={this.state.avatar || 'http://i1.istockimg.com/file_thumbview_approve/74787639/5/stock-illustration-74787639-vector-illustration-of-glasses-and-a-mustache.jpg'} />
          </div>
          <div className='infoContainer'>
            <span><strong>Name:</strong> {this.state.first_name} {this.state.last_name}</span><br /><br />
            <span><strong>Hometown:</strong> {this.state.hometown}</span><br /><br />
            <span><strong>Occupation:</strong> {this.state.occupation}</span><br /><br />
            <span><strong>Description:</strong> {this.state.description}</span><br /><br />
          </div>
        </div>
      </div>
    )
  }
}