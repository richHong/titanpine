import React from 'react';  
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = [{
  house_name: 'Hacker Habitat',
  lat: 37.8780068,
  lng: -122.2695097
}];

class GMaps extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    
  }
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true,
      panControl:true,
      zoomControl:true,
      mapTypeControl:true,
      scaleControl:true,
      streetViewControl:true,
      overviewMapControl:true,
      rotateControl:true
    });
  }
  componentWillMount(){
    //Hacks for dealing with map results on search
    if(this.props.listing.name){
      if (Array.isArray(this.props.listing.name)){
        if (this.props.listing.name.length === 0){
          this.setState({results: coords});
        } 
      } else {
        this.setState({results:[this.props.listing.name]});
      }
    } else {
      this.setState({results: coords});
    }
    if(!this.state.results){
      this.setState({results: coords});
    }
  }
  render(){
    return (
      <Gmaps
        width={'65%'}
        height={'100vh'}
        lat={this.state.results[0].lat || 37.8780068}
        lng={this.state.results[0].lng || -122.2695097}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAMUWIppT-jbjMztrR6tWSV7Y58jTZi2Sw'}}
        onMapCreated={this.onMapCreated}>
        {this.state.results ? this.state.results.map((house, i) => {
          return (
          <Marker
            key={i}
            lat={house.lat || 37.8780068}
            lng={house.lng || -122.2695097}
            draggable={true}
            onDragEnd={this.onDragEnd} />
            )
        }) : null}
        {this.state.results ? this.state.results.map((house, i) => {
          return (
          <InfoWindow
            key={i}
            lat={house.lat || 37.8780068}
            lng={house.lng || -122.2695097}
            content={house.house_name || 'Hacker Habitat'}
            onCloseClick={this.onCloseClick} />
            )
        }) : null}
      </Gmaps>
      );
  }
}
function mapStateToProps(state) {
    return {
      listing: state.listings
    }
  }

export default connect(mapStateToProps)(GMaps)