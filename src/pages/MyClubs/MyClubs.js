import React, {Fragment} from 'react'
import data from '../../mock/data'
import ClubCard from '../../components/ClubCard/ClubCard'

const MyClubs = () => {
  
  return (
    <Fragment>
      {data.myclubs.map(el => (
        <ClubCard key = {el.id}
          id={el.id} 
          title={el.title} 
          img={el.image} 
          description={el.description}/>
      ))}
    </Fragment> 
  )
}

export default MyClubs