import React from 'react';
import ChannelPost from './ChannelPost/ChannelPost';

const ChannelPosts = ({posts, channelInfo}) => (
  posts.map(channelPost =>
    <ChannelPost
      key={channelPost.id}
      text={channelPost.text}
      files={channelPost.files}
      date={channelPost.created_at}
      name={channelInfo.name}
      avatar={channelInfo.avatar_image}

    />)
);

export default ChannelPosts