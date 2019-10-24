import React from 'react';
import time from '../../assets/time.svg';

const DateComponent = props => {
   const dateHandler = sec => {
    let data = new Date(sec * 1000);
    return new Intl.DateTimeFormat('ua-UA', {
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric'
    }).format(data)
  };

  return (
    <div className='DateComponent flex'>
      <img className='Date_img' src={time} alt={time}/>
      <span className='Date_text'>{dateHandler(props.date)}</span>
    </div>
  )
};

export default DateComponent