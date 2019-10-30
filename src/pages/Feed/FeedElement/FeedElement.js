import React from 'react';
import DateComponent from '../../../components/DateComponent/DateComponent';

const FeedElement = ({content}) => {
  return (
    <div className='feed_card'>
      <div className='feed_header'>
        <div className='feed_header_left'>
          <div className='feed_logo'>
            <img src={content.avatar_image} alt='' />
          </div>
          <h3 className='feed_title'>{content.channel.name}</h3>
        </div>
        <DateComponent date = {content.created_at} page={'feed'}/>
      </div>
      <div className='feed_content'>{content.text}</div>
    </div>
  )
}

export default FeedElement