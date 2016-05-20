import React from 'react';

const HouseListing = ({house}) => (
  <div>
    <h1>{house.house_name}</h1><br/>
    <h2>{house.heading}</h2><br/>
    <div>
      <h3>Location:</h3><br/>
      <p>{house.street_add}</p><br/>
      <p>{house.city},{house.state} {house.zipcode}</p>
    </div>
    <div>
      <h3>Price:</h3><br/>
      <p>{house.price}</p>
    </div>
  </div>
)

export default HouseListing
