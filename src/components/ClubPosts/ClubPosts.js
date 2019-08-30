import React from 'react';
import ClubPost from './ClubPost/ClubPost';

const ClubPosts = ({data}) => {
  return(
    data.map(clubPost => <ClubPost key={clubPost.id} text={clubPost.text}/>)
  )
} 

export default ClubPosts