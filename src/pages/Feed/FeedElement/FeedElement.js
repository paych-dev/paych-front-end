import React from 'react';

const FeedElement = ({content}) => {
  const dateHandler = sec => {
    let data = new Date(sec * 1000);
    return data.toLocaleDateString()
  }
  return (
    <div className='feed_card'>
      <div className='feed_header'>
        <div className='feed_header_left'>
          <div className='feed_logo'>
            <img src='https://about.canva.com/wp-content/uploads/sites/3/2016/08/Band-Logo.png' alt='' />
          </div>
          <h3 className='feed_title'>{content.channel.name}</h3>
        </div>

        <div className='feed_date'>
          {dateHandler(content.created_at)}
        </div>
      </div>
      <div className='feed_content'>{content.text}</div>
    </div>
  )
}

export default FeedElement