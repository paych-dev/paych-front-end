import React from 'react'
import data from '../../mock/data'
import ClubCard from '../../components/ClubCard/ClubCard'

class AllClubs extends React.Component {
  render(){
    return (
      <div className='club-grid'>
        {data.allclubs.map(el => (
          <ClubCard key = {el.id}
            id={el.id} 
            title={el.title} 
            img={el.image}
            price={el.price} 
            description={el.description}/>
        ))}
      </div> 
    )
  }
}

export default AllClubs