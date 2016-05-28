import React from 'react';
import HouseListing from './houseListing';
import { Link } from 'react-router';

const HouseList = ({houses}, {favors}) => (
  <div className='list'>
    <div className='listHeading'><b>{ favors === 'favorites' ? 'Favorites' : ' Search Results'}</b></div>
    {Array.isArray(houses) ? houses.map((house, i) => {
      return <HouseListing house={house} key={i} />
    }) : null}
  </div>
)

export default HouseList