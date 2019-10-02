import React from 'react';
import ClubCard from './ClubCard/ClubCard';

const ClubCards = ({data}) => {
  console.log(data)
  return(
    data.map(clubCard => 
      <ClubCard key={clubCard.id} 
        id={clubCard.id} 
        title={clubCard.name} 
        img={clubCard.img} 
        description={clubCard.description}/>)
  )
} 

export default ClubCards