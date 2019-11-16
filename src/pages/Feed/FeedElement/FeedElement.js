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
    <div className='post_card'>
      <div className='post_header'>
        <div className='post_header_wrap'>
          <div className='post_logo'>
            <img src={content.channel.avatar_image} alt=''/>
          </div>
          <div className='post-header-info'>
            <h3 className='post_title'>{content.channel.name}</h3>
            <DateComponent date={content.created_at} page={'feed'}/>
          </div>
        </div>
      </div>
      <div className='post_content'>
          {images()}
        <div className='post_text'>{content.text}</div>
      </div>
    </div>
  )
};

export default FeedElement