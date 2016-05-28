import React from 'react';
import HouseListing from './houseListing';
import { Link } from 'react-router';

class HouseList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    console.log(this.props);
    return (
    <div className='list'>
      <div className='listHeading'><b>{ this.props.favorites === 'favorites' ? 'Favorites' : ' Search Results'}</b></div>
      {Array.isArray(this.props.houses) ? this.props.houses.map((house, i) => {
        return <HouseListing house={house} key={i} />
      }) : null}
    </div>
    )
  }
}
export default HouseList