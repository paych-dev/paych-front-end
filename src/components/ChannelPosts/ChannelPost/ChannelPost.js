import React from 'react';
import DateComponent from "../../DateComponent/DateComponent";

const ChannelPost = ({date, clicked, ...props}) => {
  return (
    <div className='card clubPost_wrap'>
      <div className='clubHeader'>
        <div className='clubHeader__date'>
          <DateComponent date={date}/>
        </div>
        <div className='clubHeader__new' onClick={clicked}>Новое</div>
      </div>
      <div className='clubContent'>
        <div className='channel_image'>
          { props.files[0] ? <img src={props.files[0].original_path} alt='' /> : null}
        </div>
        <div className='clubContent__text'>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default ChannelPost
