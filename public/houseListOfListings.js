import React from 'react';
import HouseListing from './houseListing';
import { Link } from 'react-router'

const HouseList = ({houses}) => (
  <div className='list'>
    {houses.map((house, i) => {
      return <HouseListing house={house} key={i} />
    })}
  </div>
)

export default HouseList