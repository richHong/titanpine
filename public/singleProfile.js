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
      occupation: 'Software Engineer',
      gen_interests: 'Gaming,Fashion',
      tech_interests: 'Node.js,React'
    };
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