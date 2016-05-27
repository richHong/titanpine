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
      gen_interests: ['Gaming', 'Fashion'],
      tech_interests: ['Node.js', 'React']
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
            <span><strong>Name:</strong> {this.state.first_name} {this.state.last_name}</span><br /><br />
            <span><strong>Hometown:</strong> {this.state.hometown}</span><br /><br />
            <span><strong>Occupation:</strong> {this.state.occupation}</span><br /><br />
            <span><strong>Description:</strong> {this.state.description}</span><br /><br />
            <span><strong>General Interests:</strong> {this.state.gen_interests.map((interest, i) => <span key={i} >{interest}, </span>)}</span><br /><br />
            <span><strong>Tech Interests:</strong> {this.state.tech_interests.map((interest, i) => <span key={i} >{interest}, </span>)}</span><br /><br />
          </div>
        </div>
      </div>
    )
  }
}