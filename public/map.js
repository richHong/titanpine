import React from 'react';
import ReactDOM from 'react-dom';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';

const coords = [{
  house_name: 'Hacker Habitat',
  lat: 37.8780068,
  lng: -122.2695097
}];

class GMaps extends React.Component {
  constructor(props){
    super(props);
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
  render(){
    return (
      <Gmaps
        width={'65%'}
        height={'100vh'}
        lat={coords[0].lat}
        lng={coords[0].lng}
        zoom={12}
        loadingMessage={'Be happy'}
        params={{v: '3.exp', key: 'AIzaSyAMUWIppT-jbjMztrR6tWSV7Y58jTZi2Sw'}}
        onMapCreated={this.onMapCreated}>
        {coords.map((house, i) => {
          return (
          <Marker
            key={i}
            lat={house.lat}
            lng={house.lng}
            draggable={true}
            onDragEnd={this.onDragEnd} />
            )
        })}
        {coords.map((house, i) => {
          return (
          <InfoWindow
            key={i}
            lat={house.lat}
            lng={house.lng}
            content={house.house_name}
            onCloseClick={this.onCloseClick} />
            )
        })}
      </Gmaps>
      );
  }
}


export default GMaps