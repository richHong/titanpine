import React from 'react';

class ProfileForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      genInterests:['Music', 'Movies', 'Books', 'Fashion', 'Outdoors', 'Sports', 'Crafting', 'Gaming'],
      techInterests: ['Javascript','Ruby', 'Node', 'React', 'Angular', 'Express', 'MongoDB', 'Postgres','Redux', 'JQuery'],
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

  submit(e, description, hometown, occupation){
    e.preventDefault();
    console.log('Your descriptions is:',description.value);
    console.log('Your hometown is:', hometown.value);
    console.log('Your general interests are:', this.state.general);
    console.log('Your general interests are:', this.state.tech);
    console.log('Your occupation is:', occupation.value);
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
                  <input type="checkbox" onChange={e => this.addGeneral(value)}/>
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
                  <input type="checkbox" onChange={e => this.addTech(value)}/>
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