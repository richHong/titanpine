import React from 'react';
import HouseListing from './houseListing';

const HouseList = ({houses}) => (
  <div>
    {houses.map((house) => {
      return <HouseListing house={house} />
    })}
  </div>
)

export default HouseList