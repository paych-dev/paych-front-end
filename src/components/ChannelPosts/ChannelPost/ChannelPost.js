import React from 'react';
import DateComponent from "../../DateComponent/DateComponent";

const ChannelPost = ({date, clicked, ...props}) => {
  const images = () => {
    if (props.files[0]) {
      return (
          <div className='channel_image'>
            {props.files[0] ? <img src={props.files[0].original_path} alt=''/> : null}
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
            <img src={props.avatar} alt=''/>
          </div>
          <div className='post-header-info'>
            <h3 className='post_title'>{props.name}</h3>
            <DateComponent date={date} page={'posts'}/>
          </div>
        </div>
      </div>
      <div className='post_content'>
        <div className='post_text'>{props.text}</div>
        {images()}
      </div>
    </div>
  )
}

export default ChannelPost
