import React from 'react';

const HouseListing = ({house}) => (
  <div>
    {house.house_name}<br/>
    {house.heading}<br/>
    Location:<br/>
    {house.street_add}<br/>
    {house.city},{house.state} {house.zipcode}<br/>
    Price:<br/>
    {house.price}
  </div>
)

export default HouseListing
