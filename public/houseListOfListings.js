import React from 'react';
import HouseListing from './houseListing';

const HouseList = ({houses}) => (
  <div>
    {houses.map((house) => {
      return <House house={house} />
    })}
  </div>
)

export default HouseList