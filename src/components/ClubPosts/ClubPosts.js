import React from 'react';
import ClubPost from './ClubPost/ClubPost';

const ClubPosts = ({ posts }) => posts.map(channelPost => <ClubPost key={channelPost.id} text={channelPost.text} date={channelPost.created_at}/>);

export default ClubPosts