import React, { Component } from 'react';
import NavBar from './navBar';

export default class FrontPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
            <div className="filter">
              <div className="overlay">
                <h1 className='title'>Hacker Habitat</h1>
                <p>Biodiesel four loko semiotics, you probably haven't heard of them meggings freegan farm-to-table knausgaard blog vinyl pabst bespoke migas. Tattooed franzen single-origin coffee austin dreamcatcher beard meh freegan photo booth. Crucifix chicharrones beard, chambray tilde shoreditch bitters knausgaard squid flexitarian thundercats lomo food truck fap locavore. Single-origin coffee wolf brooklyn tacos schlitz. Tofu hoodie four dollar toast polaroid, etsy artisan intelligentsia farm-to-table iPhone vegan photo booth shabby chic kitsch. Sartorial humblebrag butcher disrupt offal, health goth pork belly microdosing wolf locavore man bun next level. Truffaut sartorial chillwave iPhone, messenger bag keytar helvetica pork belly crucifix readymade.</p>
              </div>
              <video autoPlay loop className="fillWidth">
                  <source src="assets/Working-it/Mp4/Working-it.mp4" type="video/mp4" />
                  <source src="assets/Working-it/Webm/Working-it.webm" type="video/webm" />
              </video>
            </div>
      }
      </div>
    )
  }
}
