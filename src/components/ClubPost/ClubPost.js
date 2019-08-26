import React from 'react';
import Card from '../Card/Card';

import style from './ClubPost.module.css'
import clock from '../../assets/time.png'

const ClubPost = props => {
  return (
    <Card>
      <div className={style.clubHeader}>
        <div className={style.clubHeader__date}>
          <div className={style.clubHeader__date_clock}>
            <img src={clock} alt={clock} />
          </div>
          <div className={style.clubHeader__date_text}>
            <span>{props.time}</span>
          </div>
        </div>
        <div className={style.clubHeader__new}>Новое</div>
      </div>
      <div className={style.clubContetn}>
        <div className={style.clubContent__text}>
          {props.text}
        </div>
      </div>
    </Card>
  )
}

export default ClubPost
