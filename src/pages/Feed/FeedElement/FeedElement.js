import React from 'react';
import style from './FeedElement.module.scss';

const FeedElement = ({content}) => {
  const dateHandler = sec => {
    let data = new Date(sec * 1000);
    return data.toLocaleDateString()
  }
  return (
    <div className={style.feed_card}>
      <div className={style.feed_header}>
        <div className={style.feed_header_left}>
          <div className='feed-image'></div>
          <h3 className={style.feed_title}>{content.channel.name}</h3>
        </div>

        <div className={style.feed_date}>
          {dateHandler(content.created_at)}
        </div>
      </div>
      <div className={style.feed_content}>{content.text}</div>
    </div>
  )
}

export default FeedElement