'use strict';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';

class MyCarousel extends React.Component {
  constructor(){
    super();
    this.mixins = [Carousel.ControllerMixin];
    this.state = {};
  }
  componentWillMount(){
    let images = [];
    if(this.props.listing.pic1){
      images.push(this.props.listing.pic1);
    }
    if(this.props.listing.pic2){
      images.push(this.props.listing.pic2);
    }
    if(this.props.listing.pic3){
      images.push(this.props.listing.pic3);
    }
    if(this.props.listing.pic4){
      images.push(this.props.listing.pic4);
    }
    if(this.props.listing.pic5){
      images.push(this.props.listing.pic5);
    }
    if(!this.props.listing.pic1){
      images.push('http://usanorth811.org/wp-content/uploads/2013/07/house-img.jpg');
    }
    this.setState({images: images});
  }
  render() {
    console.log(Carousel.Item);
    return (
      <Carousel >
        {this.state.images.map((image, i) => {
          return (
            <Carousel.Item key={i}>
              <img width={900} height={500} className='carouselImage' src={image} />
            </Carousel.Item>
            )
          })}
      </Carousel>
    )
  }
};
function mapStateToProps(state) {
  return {
    listing: state.listings.singleListing
  }
}

export default connect(mapStateToProps)(MyCarousel)
