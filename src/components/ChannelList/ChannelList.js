import React from 'react';
import ChannelCard from './ChannelCard/ChannelCard';

const ChannelList = ({data}) => {
  return(
    data.map(clubCard => 
      <ChannelCard key={clubCard.id} 
        id={clubCard.id} 
        title={clubCard.name} 
        img={clubCard.img} 
        description={clubCard.description}/>
    )
  );
};

export default ChannelList