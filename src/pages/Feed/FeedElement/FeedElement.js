import React from 'react';
import DateComponent from '../../../components/DateComponent/DateComponent';

const FeedElement = ({content}) => {
  const images = () => {
    if (content.files[0]) {
      return (
        <div className='channel_image'>
          {content.files[0] ? <img src={content.files[0].original_path} alt=''/> : null}
        </div>
      )
    } else {
      return null
    }
  };
  return (
    <div className='feed_card'>
      <div className='feed_header'>
        <div className='feed_header_wrap'>
          <div className='feed_logo'>
            <img src={content.channel.avatar_image} alt=''/>
          </div>
          <div className='feed-header-info'>
            <h3 className='feed_title'>{content.channel.name}</h3>
            <DateComponent date={content.created_at} page={'feed'}/>
          </div>
        </div>
      </div>
      <div className='feed_content'>
          {images()}
        <div className='feed_text'>{content.text}</div>
      </div>
    </div>
  )
};

export default FeedElement