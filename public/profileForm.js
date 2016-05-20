import React from 'react';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genInterests:['Music', 'Movies', 'Books', 'Fashion', 'Outdoors', 'Sports', 'Crafting', 'Gaming'],
      techInterests: ['Javascript','Ruby', 'Node', 'React', 'Angular', 'Express', 'MongoDB', 'Postgres','Redux', 'JQuery'],
      general:[],
      tech:[],
      currentUserID: 1
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

  submit(e, description, hometown, occupation){
    e.preventDefault();
  
    fetch('http://localhost:3001/v1/users/'+currentUserID, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hometown: hometown.value,
        description: description.value,
        occupation: occupation.value,
        gen_interests: this.state.general,
        tech_interests: this.state.tech
      })
    }).then(function(response){
      console.log(response);
    });

    description.value = '';
    hometown.value = '';
    occupation.value = '';
  }

  render(){
    return(
        <form onSubmit={e => this.submit(e, this.description, this.hometown, this.occupation)}>
          <label><strong>Description:</strong></label><br/>
          <textarea id="aboutMe" placeholder="Tell me about yourself" ref={input => this.description = input} /><br/>
          <label><strong>Hometown:</strong></label><br/>
          <input placeholder="Where are you from?" ref={input => this.hometown = input} /><br/>
          <label><strong>Occupation:</strong></label><br/>
          <input placeholder="Where do you work?" ref={input => this.occupation = input} /><br/>
          <label><strong>General Interests:</strong></label>
          <div>
            {this.state.genInterests.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addGeneral(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
          </div>
          <label id="techInterests"><strong>Tech Interests:</strong></label>
          <div>
            {this.state.techInterests.map((value, i) => {
              return (
                <div key={i} className="checkbox">
                  <input type="checkbox" onChange={e => this.addTech(value)} />
                  <span>{value}</span>
                </div>
                )
            })}
          </div>
          <input id="profileSubmit" type="submit" value="Save Changes"/>
        </form>
      )
  }
}

export default ProfileForm 