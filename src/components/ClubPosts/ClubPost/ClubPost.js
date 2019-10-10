import React from 'react';

import style from './ClubPost.module.css'
import clock from '../../../assets/time.png'

const ClubPost = props => {

  const dateHandler = sec => {
    let data = new Date(sec * 1000);
    return data.toLocaleDateString()
  }

  return (
    <div className={`card ${style.clubPost_wrap}`}>
      <div className={style.clubHeader}>
        <div className={style.clubHeader__date}>
          <div className={style.clubHeader__date_clock}>
            <img src={clock} alt={clock} />
            <p>{ dateHandler(props.date) }</p>
          </div>
          <div className={style.clubHeader__date_text}>
            <span>{props.time}</span>
          </div>
        </div>
        <div className={style.clubHeader__new} onClick={props.clicked}>Новое</div>
      </div>
      <div className={style.clubContetn}>
        <div className={style.clubContent__text}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default ClubPost
