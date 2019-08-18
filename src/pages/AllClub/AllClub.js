import React, {Fragment} from 'react'
import data from '../../mock/data'
import ClubCard from '../../components/ClubCard/ClubCard'
import { async } from 'q';

class AllClubs extends React.Component {
  render(){
    return (
      <Fragment>
        {data.allclubs.map(el => (
          <ClubCard key = {el.id}
            id={el.id} 
            title={el.title} 
            img={el.image}
            price={el.price} 
            description={el.description}/>
        ))}
      </Fragment> 
    )
  }
}

export default AllClubs