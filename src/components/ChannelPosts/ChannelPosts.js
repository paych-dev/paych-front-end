import React from 'react';
import ChannelPost from './ChannelPost/ChannelPost';

const ChannelPosts = ({ posts }) => (
  posts.map(channelPost =>
    <ChannelPost
      key = {channelPost.id}
      text = {channelPost.text}
      files = {channelPost.files}
      date = {channelPost.created_at}/>)
);

export default ChannelPosts