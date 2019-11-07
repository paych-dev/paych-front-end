import React from 'react';
import ChannelCard from './ChannelCard/ChannelCard';

const ChannelList = ({data}) => {
  return(
    data.map(channel =>
      <ChannelCard
        key={channel.id}
        ownerId={channel.owner_id}
        id={channel.id}
        title={channel.name}
        img={channel.avatar_image}
        description={channel.description}/>
    )
  );
};

export default ChannelList