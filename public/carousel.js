import React, {Component} from 'react';
import {Carousel, CarouselItem, CarouselCaption} from 'react-bootstrap';
import { connect } from 'react-redux';

class MyCarousel extends React.Component {
  constructor(){
    super();
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
      images.push('http://freedesignfile.com/upload/2016/03/House-architecture-blueprint-vector-set-03.jpg');
    }
    this.setState({images: images});
  }
  render() {
    console.log(this.state);
    return (
      <Carousel>
        {this.state.images.map((img, i) => {
          return (
          <CarouselItem key ={i}>
            <img className='carouselImage' width={700}src={img} />
          </CarouselItem>
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
