import React from 'react';
import Card from '../Card/Card';

import style from './ClubPost.module.css'
import clock from '../../assets/time.png'

const ClubPost = () => {
  return (
    <Card>
      <div className={style.clubHeader}>
        <div className={style.clubHeader__date}>
          <div className={style.clubHeader__date_clock}>
            <img src={clock} alt={clock} />
          </div>
          <div className={style.clubHeader__date_text}>
            <span>СЕГОДНЯ, 9:23</span>
          </div>
        </div>
        <div className={style.clubHeader__new}>Новое</div>
      </div>
      <div className={style.clubContetn}>
        <div className={style.clubContent__text}>
        Более 10 миллионов рублей для юридических лиц

Размещаться будет в особой экономической зоне, стартует с одним госбанком, но список партнеров будет расширяться, вход только через Госуслуги, то есть пользоваться смогут резиденты РФ. 

Запускаться будет как эксперимент, с соответствующим постановлением Правительстаа. И вообще сейчас вектор обсуждения разрешить крипту.
        </div>
      </div>
    </Card>
  )
}

export default ClubPost
