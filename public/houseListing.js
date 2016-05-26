import React from 'react';

const HouseListing = ({house}) => (
  <div>
    <img className='housePic' src={house.url} />
    <strong>{house.house_name}</strong><br/>
    {house.heading}<br/><br/>
    <strong>Location:</strong><br/>
    {house.street_add}<br/>
    {house.city},{house.state} {house.zipcode}<br/>
    <span className='price'><strong>Price:</strong> ${house.price} per night</span>
  </div>
)

export default HouseListing
