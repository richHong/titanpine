import React from 'react';

const HouseListing = ({house}) => (
  <div>
    <img className='housePic' src={house.url || 'https://openclipart.org/image/2400px/svg_to_png/170529/pib-dark.png'} />
    <strong>{house.house_name}</strong><br/>
    {house.heading}<br/><br/>
    <strong>Location:</strong><br/>
    {house.street_add}<br/>
    {house.city},{house.state} {house.zipcode}<br/>
    <span className='price'><strong>Price:</strong> ${house.price} per night </span>
    <br />
    <hr />
  </div>
)

export default HouseListing
