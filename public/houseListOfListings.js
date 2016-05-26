import React from 'react';
import HouseListing from './houseListing';

const HouseList = ({houses}) => (
  <div>
    {houses.map((house, i) => {
      return <HouseListing house={house} key={i} />
    })}
  </div>
)

export default HouseList