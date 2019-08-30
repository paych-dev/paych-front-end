import React from 'react';
import ClubCard from './ClubCard/ClubCard';

const ClubCards = ({data}) => {
  return(
    data.map(clubCard => 
      <ClubCard key={clubCard.id} 
        id={clubCard.id} 
        title={clubCard.title} 
        img={clubCard.img} 
        description={clubCard.desc}/>)
  )
} 

export default ClubCards